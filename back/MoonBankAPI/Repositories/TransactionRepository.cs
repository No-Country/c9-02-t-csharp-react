using Common.DTO;
using Contracts.Repositories;
using DataAccess;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        private MoonBankContext _context { get; set; }
        public TransactionRepository(MoonBankContext context)
        {
            _context = context;
        }

        public IList<TransactionDTO> GetTransactionsHistory(int idAccount) //retornar error o mensaje si la lista viene vacia
        {
            return _context.Transactions
                .Where(x => x.IdSourceAccount == idAccount || x.IdDestinationAccount == idAccount)
                .Select(x => new TransactionDTO
                {
                    IdTransaction = x.IdTransaction,
                    TypeTransaction = (Common.DTO.TypeTransaction)x.TypeTransaction,
                    TypeDeposit = (Common.DTO.TypeDeposit)x.TypeDeposit,
                    Date = x.Date,
                    Amount = x.Amount,
                    IdSourceAccount = x.IdSourceAccount,
                    IdDestinationAccount = x.IdDestinationAccount,
                    IdReward = x.IdReward
                })
                .ToList();
        }


        public void MakeTransaction(TransactionDTO transactionDTO)
        {
            var option = transactionDTO.TypeTransaction;

            switch (option)
            {
                case Common.DTO.TypeTransaction.Deposit:

                    MakeDeposit(transactionDTO);

                    break;

                case Common.DTO.TypeTransaction.PayService:

                    PayService(transactionDTO);

                    break;

                case Common.DTO.TypeTransaction.Transfer:

                    MakeTransfer(transactionDTO);

                    break;

                case Common.DTO.TypeTransaction.Reward:

                    RedeemReward(transactionDTO);

                    break;

                default:

                    throw new ArgumentException("Invalid transaction type.");
            }
        }

        public void MakeDeposit(TransactionDTO transactionDTO)
        {
            var destinationAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdDestinationAccount);

            if (transactionDTO.Amount > 50000)
            {
                Console.WriteLine("El monto ingresado es mayor a $50000 que es el permitido.");
                return;
            }

            destinationAccount.Balance += transactionDTO.Amount;

            var transaction = new DataAccess.Models.Transaction
            {
                IdDestinationAccount = transactionDTO.IdDestinationAccount,
                TypeTransaction = DataAccess.Models.TypeTransaction.Deposit,
                Amount = transactionDTO.Amount,
                Date = DateTime.Now
            };

            _context.Transactions.Add(transaction);
            _context.SaveChanges();

            Console.WriteLine($"Depósito realizado con éxito a la cuenta de: {destinationAccount.Name}");
        }

        public void PayService(TransactionDTO transactionDTO)
        {
            
            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);
            var service = _context.Services.FirstOrDefault(s => s.IdService == transactionDTO.IdService);

            if (service.Amount > sourceAccount.Balance)
            {
                Console.WriteLine("No tienes suficiente saldo para abonar este servicio.");
                return;
            }

            sourceAccount.Balance -= service.Amount;
            sourceAccount.RewardPoints += 50;

            var transaction = new DataAccess.Models.Transaction
            {
                IdService = transactionDTO.IdService,
                TypeTransaction = DataAccess.Models.TypeTransaction.PayService,
                Amount = transactionDTO.Amount,
                Date = DateTime.Now
            };

            _context.Transactions.Add(transaction);
            _context.SaveChanges();

            Console.WriteLine($"Servicio abonado: {service.Name}  ${service.Amount}");
        }

        public void MakeTransfer(TransactionDTO transactionDTO)
        {
            if (transactionDTO.Amount > 50000)
            {
                throw new TransactionException("Monto ingresado mayor al limite permitido");
            }

            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);

            // Verificar que no se transfiera a la misma cuenta
            if (sourceAccount.CBU_CVU == transactionDTO.DestinationAccountCBU_CVU || sourceAccount.Alias == transactionDTO.DestinationAccountAlias)
            {
                Console.WriteLine("No se puede transferir a la misma cuenta.");
                return;
            }

            var destinationAccount = _context.Accounts.FirstOrDefault(a => a.CBU_CVU == transactionDTO.DestinationAccountCBU_CVU || a.Alias == transactionDTO.DestinationAccountAlias);


            if (destinationAccount == null)
            {
                throw new TransactionException("Cuenta a transferir inexistente");
            }

            if (transactionDTO.Amount > sourceAccount.Balance)
            {
                throw new TransactionException("Saldo insuficiente");
            }

            sourceAccount.Balance -= transactionDTO.Amount;
            destinationAccount.Balance += transactionDTO.Amount;
            sourceAccount.RewardPoints += 100;

            var transaction = new DataAccess.Models.Transaction
            {
                TypeTransaction = DataAccess.Models.TypeTransaction.Transfer,
                IdSourceAccount = transactionDTO.IdSourceAccount,
                IdDestinationAccount = destinationAccount.IdAccount,
                Amount = transactionDTO.Amount,
                Date = DateTime.Now
            };

            _context.Transactions.Add(transaction);
            _context.SaveChanges();

            Console.WriteLine($"Transfer to {destinationAccount.Name} success.");
        }

        public void RedeemReward(TransactionDTO transactionDTO)
        {
            var selectedReward = _context.Rewards.FirstOrDefault(r => r.IdReward == transactionDTO.IdReward);

            if (selectedReward == null)
            {
                Console.WriteLine("Recompensa no encontrada.");
                return;
            }

            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);

            if (selectedReward.Points > sourceAccount.RewardPoints)
            {
                Console.WriteLine("No tienes suficientes puntos para redimir esta recompensa.");
                return;
            }

            sourceAccount.RewardPoints -= selectedReward.Points;

            var transaction = new DataAccess.Models.Transaction
            {
                IdSourceAccount = transactionDTO.IdSourceAccount,
                TypeTransaction = DataAccess.Models.TypeTransaction.Reward,
                Amount = 0,
                IdReward = selectedReward.IdReward,
                Date = DateTime.Now
            };

            _context.Transactions.Add(transaction);
            _context.SaveChanges();

            Console.WriteLine($"Recompensa acreditada: {selectedReward.Name}");
        }

       
        
      
  
       
       
    }
}

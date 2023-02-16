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

namespace Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        private MoonBankContext _context { get; set; }
        public TransactionRepository(MoonBankContext context)
        {
            _context = context;
        }

        public IList<TransactionDTO> GetTransactionsHistory(TransactionDTO transactionDTO)
        {
            return _context.Transactions
                .Where(x => x.IdSourceAccount == transactionDTO.IdSourceAccount || x.IdDestinationAccount == transactionDTO.IdDestinationAccount)
                .Select(x => new TransactionDTO
                {
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



        public void RedeemReward(TransactionDTO transactionDTO)
        {
            List<RewardDTO> rewards = _context.Rewards
                .Select(r => new RewardDTO
                {
                    IdReward = r.IdReward,
                    Name = r.Name,
                    Points = r.Points,
                    RewardUrlImage = r.RewardUrlImage
                })
                .ToList();

            Console.WriteLine("Selecciona una recompensa para acreditar a la cuenta:");

            int i = 1;
            foreach (var reward in rewards)
            {
                Console.WriteLine($"{i}. {reward.Name} ({reward.Points} puntos)");
                i++;
            }

            Console.Write("Opción seleccionada: ");
            int selectedOption = int.Parse(Console.ReadLine());
            RewardDTO selectedReward = rewards[selectedOption - 1];

            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);

            if (selectedReward.Points > sourceAccount.RewardPoints)
            {
                Console.WriteLine("No tienes suficientes puntos para redimir esta recompensa.");
                return;
            }

            sourceAccount.RewardPoints -= selectedReward.Points;

            _context.SaveChanges();

            Console.WriteLine($"Recompensa acreditada: {selectedReward.Name}");
        }

        public void PayService(TransactionDTO transactionDTO)
        {
            List<ServiceDTO> services = _context.Services
                .Select(s => new ServiceDTO
                {
                    Name = s.Name,
                    Amount = s.Amount,
                    ServiceUrlImage = s.ServiceUrlImage,

                })
                .ToList();

            Console.WriteLine("Selecciona un servicio para abonar:");

            int i = 1;
            foreach (var service in services)
            {
                Console.WriteLine($"{i}. {service.Name} (${service.Amount})");
                i++;
            }

            Console.Write("Opción seleccionada: ");
            int selectedOption = int.Parse(Console.ReadLine());
            ServiceDTO selectedService = services[selectedOption - 1];

            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);

            if (selectedService.Amount > sourceAccount.Balance)
            {
                Console.WriteLine("No tienes suficiente saldo para abonar este servicio.");
                return;
            }

            sourceAccount.Balance -= selectedService.Amount;
            sourceAccount.RewardPoints += 50;

            _context.SaveChanges();

            Console.WriteLine($"Servicio abonado: {selectedService.Name}  ${selectedService.Amount}");
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

            _context.SaveChanges();

            Console.WriteLine($"Deposito realizado con exito a la cuenta de : {destinationAccount.Name}");
        }

        public void MakeTransfer(TransactionDTO transactionDTO)
        {
            if (transactionDTO.Amount > 50000)
            {
                Console.WriteLine("El monto ingresado es mayor a $50000 que es el permitido por transferencia.");
                return;
            }

            var sourceAccount = _context.Accounts.FirstOrDefault(a => a.IdAccount == transactionDTO.IdSourceAccount);

            var destinationAccount = _context.Accounts.FirstOrDefault(a => a.CBU_CVU == transactionDTO.DestinationAccountCBU_CVU || a.Alias == transactionDTO.DestinationAccountAlias);


            if (destinationAccount == null)
            {
                Console.WriteLine("Cuenta a transferir inexistente.");
                return;
            }

            if (transactionDTO.Amount > sourceAccount.Balance)
            {
                Console.WriteLine("No tienes suficiente saldo para abonar este servicio.");
                return;
            }

            sourceAccount.Balance -= transactionDTO.Amount;
            destinationAccount.Balance += transactionDTO.Amount;
            sourceAccount.RewardPoints += 100;

            _context.SaveChanges();

            Console.WriteLine($"Transfer to {destinationAccount.Name} success.");
        }

    }
}

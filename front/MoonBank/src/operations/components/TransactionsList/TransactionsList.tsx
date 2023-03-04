import { Reward, Transaction } from "../../../shared";

import { Activity } from "../Activity";

interface Props {
  activities?: Transaction[];
  rewards?: Reward[];
  alias: string
  sliceInit: number;
  sliceFin?: number;
}

export const TransactionsList = ({activities, alias, rewards, sliceInit, sliceFin}: Props) => {
  return (
    <>
    {activities?.slice(sliceInit, sliceFin).map((activity) => {
          const actDate = new Date(activity.date).toLocaleDateString(undefined, {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
          });

          const reward = rewards?.find((reward) => reward.idReward === activity.idReward) as Reward;
         
          return !reward ? (
            <Activity
              key={activity.id}
              quantity={activity.amount}
              serviceDescription={`${activity.typeDeposit ? activity.typeDeposit : 'none'}`}
              serviceTitle={activity.typeTransaction}
              date={actDate}
              typeItem='activity'
              totalPoints={activity.amount}
              idAccount={Number(alias.split("b")[1])}
              idDestinationAccount={activity.idDestinationAccount}
              typeTransaction={activity.typeTransaction}
            />
          ) : ''
        })}
    </>
  )
}

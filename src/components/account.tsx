import { useTelegram } from '@/hooks/use-telegram'
// import { useEffect } from 'react'
import { useAccount } from 'wagmi'

export const Account = () => {
  const { user } = useTelegram()

  const account = useAccount()

  // useEffect(() => {
  //   if (account.isConnected) {
  //     tg.sendData(
  //       JSON.stringify({
  //         type: 'account',
  //         data: account.address,
  //       })
  //     )
  //   }
  // }, [account])

  return (
    <div className='flex flex-col gap-2 items-center'>
      <p>Привет {user?.first_name}</p>
      <p>{account.isConnected ? account.address : 'Не подключен'}</p>
    </div>
  )
}

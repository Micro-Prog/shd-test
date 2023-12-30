import AddTask from '../(components)/addtask/AddTask';
import DeleteAction from '../(components)/deleteaction/DeleteAction';
import { ItemType } from '@/types/types';
import EditAction from '../(components)/editaction/EditAction';
import StatusAction from '../(components)/statusaction/StatusAction';


async function getData() {
    const res = await fetch(`https://hr-todo.sahda.ir/`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "GET",
    })   

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }


export default async function HomePage() {
    
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">

          SAHDA Task List - Test

        </p>
        <div className="flex flex-col gap-12 justify-center items-center">
          
           <div className='flex flex-col justify-center w-full h-full'>
                {
                    data ? 
                    <h3>
                    {
                        data.uncompleted?.map((item: ItemType) => {
                            return (
                                <div className=' flex flex-col' key={Number(item.id)}>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row gap-14'>
                                            <div>
                                            {item.id}
                                            </div>
                                            <div className={`${item.todoStatu == '2' ? 'text-green-700' : 'text-red-700'}`}>
                                                {item.todoStatu == '2' ? 'Comp' : 'Uncomp'}
                                            </div>
                                            <div className='text-[8px]'>
                                                <StatusAction {...item} />
                                            </div>
                                            <div>
                                            {item.item}
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                        <div>
                                            <EditAction {...item} />
                                        </div>
                                        <div>
                                            <DeleteAction {...item} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </h3> :
                    <h3>
                     در حال بارگزاری
                    </h3>
                }

{
                    data ? 
                    <h3>
                    {
                        data.completed?.map((item: ItemType) => {
                            return (
                                <div className=' flex flex-col' key={Number(item.id)}>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row gap-14'>
                                            <div>
                                            {item.id}
                                            </div>
                                            <div className=' text-green-700'>
                                                {item.todoStatu == '2' ? 'Comp' : 'Uncomp'}
                                            </div>
                                            <div className='text-[8px]'>
                                                <StatusAction {...item} />
                                            </div>
                                            <div>
                                            {item.item}
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                        <div>
                                            <EditAction {...item} />
                                        </div>
                                        <div>
                                            <DeleteAction {...item} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </h3> :
                <h3>
                    در حال بارگزاری
                </h3>
                }
            </div>

            <AddTask />

          </div>
    </main>
  )
}


export const revalidate = 0
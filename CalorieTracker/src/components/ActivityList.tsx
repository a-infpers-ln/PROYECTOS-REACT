import { Activity } from "../types"

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities} : ActivityListProps) {
  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">
            Comida y Actividades
        </h2>
        {activities.map( activity => (
            <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                <div className="space-y-2 relative">
                    <p>
                        {activity.category}
                    </p>
                    <p className="text-2xl font-bold pt-5">{activity.name}</p>
                    <p className="font-black text-4xl text-lime-500">
                        {activity.calories} {''}
                        <span>Calorias</span>
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        ))}
    </>
  )
}

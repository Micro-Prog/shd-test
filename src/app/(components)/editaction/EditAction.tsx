"use client";
import { useRouter } from "next/navigation";
import { ItemType } from "@/types/types";


const EditAction = (data: ItemType) => {

    const router = useRouter()

    const handleEditAction = async (props: ItemType) => {
        router.push(`/edittask/${props.id}`)
    }


    return (
        <section>
            <button
                className="text-[9px]"
                onClick={() => handleEditAction(data)}
            >
                Edit
            </button>
        </section>
    )
}

export default EditAction;
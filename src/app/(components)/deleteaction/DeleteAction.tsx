"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ItemType } from "@/types/types";

const DeleteAction = (data: ItemType) => {

    const router = useRouter()
    
    const handleDeleteAction = async (props: ItemType) => {

        const res = await fetch(`https://hr-todo.sahda.ir/delete.php`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({
                id: props.id,
                type: props.todoStatu,
                sort: props.sort
            })
        })

        router.refresh()

    }


    return (
        <section>
            <button
                className="text-[9px]"
                onClick={() => handleDeleteAction(data)}
            >
                Delete
            </button>
        </section>
    )
}

export default DeleteAction;
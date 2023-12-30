"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { ItemType } from "@/types/types";

const StatusAction = (data: ItemType) => {

    const router = useRouter()
    
    const handleStatusAction = async (props: ItemType) => {

        const res = await fetch(`https://hr-todo.sahda.ir/update.php`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                id: props.id,
                type: props.todoStatu == "1" ? "2" : "1",
                sort: true
            })
        })

            router.refresh()
    }


    return (
        <section>
            <button
                className="text-[9px]"
                onClick={() => handleStatusAction(data)}
            >
                {data.todoStatu == "2" ? 'undone' : 'done'}
            </button>
        </section>
    )
}

export default StatusAction;
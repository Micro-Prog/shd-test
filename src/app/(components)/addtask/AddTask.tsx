"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


const AddTask = () => {

    const [ formField, setFormField ] = useState("")

    const router = useRouter()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormField(prev => value);
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`https://hr-todo.sahda.ir/create/task/`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                item: formField
            })
        })

            router.refresh()
    }


    return (
        <section>
            <div>
                <form onSubmit={handleFormSubmit}>
                    
                     <input
                        type="text"
                        className=" text-black"
                        value={formField}
                        onChange={handleInputChange}
                     >

                     </input>   
                    <button>
                        +
                    </button>

                </form>
            </div>
        </section>
    )
}

export default AddTask;
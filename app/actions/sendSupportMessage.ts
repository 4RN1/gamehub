"use server"

import pool from "@/lib/db";


export async function sendMessage(formData : FormData) : Promise<void> {

    const userName = formData.get("name")
    const email = formData.get("email")
    const userMessage = formData.get("message")


    try {

          await pool.query(" INSERT INTO support (user_name , user_email, user_message) VALUES ($1, $2, $3) RETURNING *"  , [userName , email, userMessage ])

         

        
    } catch (error) {

        console.error(error)
        
    }
    
       

}


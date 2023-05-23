import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()


    const onSubmit = (e) => {

        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder('')
    }

    return (
        <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control form-control-check'>
                <label htmlFor="">Task</label>
                <input type="text"
                    placeholder='Add Task '
                    {...register("task", { required: true })}
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)}
                />
                <error>
                    {errors.task?.type === "required" && "Task is required"}
                </error>
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor="day">Day & Time</label>
                <input type="text"
                    id='day'
                    placeholder='Add Schedule'
                    {...register("schedule", { required: true })}
                    value={day}
                    onChange={(e) =>
                        setDay(e.target.value)}
                />
                <error>
                    {errors.schedule?.type === "required" && " Schedule is required"}
                </error>
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox"
                    value={reminder}
                    onChange={(e) =>
                        setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value={"Save Task"} className='btn btn-block' />

        </form>
    )
}

export default AddTask

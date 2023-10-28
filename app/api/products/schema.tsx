import { z } from "zod"

const schema = z.object({
    name: z.string().min(1),
    price: z.number().min(0).max(999999999999999),
})

export default schema;
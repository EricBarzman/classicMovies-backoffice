import { ContactUsDto } from "@/types/users.type"

function ContactUsMessageCard({ message }: { message: ContactUsDto }) {

  const date = message.createdAt.toDate().toISOString()

  return (
    <article className="shadow-md shadow-gray-400 rounded-2xl p-4">
      <h3 className="font-semibold mb-2">{message.topic}</h3>
      <h4 className="mb-4 text-sm">{message.email} <span className="text-xs text-gray-600">{date}</span></h4>
      <p>{message.content}</p>
    </article>
  )
}

export default ContactUsMessageCard
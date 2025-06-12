'use client';

import { topicsList } from "@/app/constants/contactUsTopics";
import ContactUsMessageCard from "@/components/ContactUsComponents/ContactUsMessageCard";
import { useContactMessage } from "@/firebase/users/contactMessageHooks"
import { ContactUsDto } from "@/types/users.type";
import { useEffect, useState } from "react";

type Criteria = "email" | "topic" | '';

function ContactUsMessage() {

  const [messages, setMessages] = useState<ContactUsDto[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactUsDto[]>([]);
  const [criteria, setCriteria] = useState<Criteria>('');
  const [chosenTopic, setChosenTopic] = useState('sayHi');

  const { getContactMessages } = useContactMessage();

  useEffect(() => {
    getContactMessages().then(data => {
      setMessages(data);
      setFilteredMessages(data);
    });
  }, [])

  useEffect(() => {
    if (criteria === "") setFilteredMessages(messages);

    if (criteria === 'email') {
      const sorted = messages.sort((a, b) => {
        if (a.email > b.email) return 1
        if (a.email < b.email) return -1
        else return 0;
      })
      setFilteredMessages(sorted);
    }

    if (criteria === "topic") {
      const filtered = messages.filter(message => message.topic === chosenTopic);
      setFilteredMessages(filtered);
    }
  }, [criteria, chosenTopic])

  return (
    <div className="py-4 px-24">
      <h2 className="text-center font-bold text-xl">Contact us messages</h2>
      <div>
        <h3 className="mt-6 font-bold text-center">Classer par</h3>
        <div className="text-center mt-4">
          <select defaultValue="" onChange={(e) => setCriteria(e.target.value as Criteria)}>
            <option value="" disabled>--Choisir--</option>
            <option value="">Tous</option>
            <option value="topic">Topic</option>
            <option value="email">Email</option>
          </select>
          {criteria === "topic" && (
            <select defaultValue="" onChange={(e) => setChosenTopic(e.target.value)}>
              <option value="" disabled>--Topic--</option>
              {topicsList.map(topic => (
                <option key={topic.id} value={topic.label}>{topic.label}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-center font-bold mt-12">Résultats:</h3>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {filteredMessages.map(message => (
            <ContactUsMessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactUsMessage
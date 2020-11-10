import Head from 'next/head'
import { useState } from 'react'

import SearchBar from '../components/UI/SearchBar/SearchBar'
import Results from '../components/UI/Results/Results'
import EmailList from '../components/UI/List/EmailList'

import { emails } from '../data/emails'

export default function Home() {
  const [emailArray, setEmailArray] = useState(emails)

  const onChangeEmails = (e, query) => {
    e.preventDefault()

    let tempEmails = []

    if (query === '' || query.length === 0) {
      tempEmails = [...emails]
    } else {
      tempEmails = [...emailArray]
      tempEmails = tempEmails.filter((email) => email.subject.toUpperCase().includes(query.toUpperCase()))
    }
    setEmailArray(tempEmails)
  }

  return (
    <>
      <Head>
        <title>Hennge Admission</title>
      </Head>
      <SearchBar onChangeEmails={onChangeEmails} />
      <Results emailCount={emails.length} />
      <EmailList emails={emailArray} />
    </>
  )
}

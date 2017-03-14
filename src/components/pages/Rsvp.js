import React from 'react'
import Page from '../Page'

export const Rsvp = () => (
  <Page>
    <p>Rsvp. This will be fun.</p>
    <p>Really high-level flow idea here:</p>
    <ul>
      <li>Paragraph at top explaining how to pull up your RSVP record</li>
      <li>Code will be a hash of street address + last name + zip code. Ex: mine would be 1218-mcbride-63021. Probably good to give a generic example showing a name + address and what the code would be.</li>
      <li>Big input field to add the code, plus a "go" button or something to pull up reservation record</li>
      <li>After searching, all records matching that RSVP criteria will display. Will allow them to edit as many times as they want. Not going to check for "have they already RSVP'd". This would allow for people living with their parents to edit their responses separately or change the RSVP.</li>
      <li>With that in mind, probably need to do two things: some sort of admin page where Joe and Kelly can see all RSVP records and filter by response and all that, and also be able to lock the RSVP page after a certain date so people can't change their RSVP last minute without telling anyone.</li>
      <li>Each RSVP record will have some basic data represented. Your name will be shown, a check box for attending (yes/no), and if you are allowed to bring a guest you will get an extra item to fill in that says "bringing a guest?" (again, yes/no) and if you choose "yes", it will ask for the guest's first and last name</li>
      <li>Per Joe and Kelly's request, we do not want to do the whole "how many people coming" free form field in hopes that it will avoid difficult conversations with certain family members. They will clearly see the list of people invited and know who can and cannot come.</li>
      <li>Big fat Save button at the bottom of the form. Submitting will sync data back to Firebase and they'll get a "success" message upon successful save.</li>
    </ul>
  </Page>
)
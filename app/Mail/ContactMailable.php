<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMailable extends Mailable
{
    use Queueable, SerializesModels;
    public $contact_data;

    /**
     * Create a new message instance.
     */
    public function __construct($contact_data)
    {
        //
        $this->contact_data = $contact_data;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Mailable',
        );
    }

    /**
     * Get the message content definition.
     */
    // public function content(): Content
    // {
    //     return new Content(
    //         //view: 'view.name',
    //     );
    // }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    // public function attachments(): array
    // {
    //     return [];
    // }

    /**
     * Build the message.
     *
     * @return $this
     */

    public function build()
    {
        // return $this->view('view.name');

        $from_name = "Funda of Web IT";
        $from_email = "kanishdan23@gmail.com";
        $subject = "Funda of Web IT: You have a new query";
        return $this->from($from_email, $from_name)
            ->view('Email.book')
            ->subject($subject)
        ;
    }
}

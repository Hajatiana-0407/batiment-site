<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Mime\Email;

final class ContactController extends AbstractController
{
    #[Route('/api/contact', name: 'contact', methods: ['POST'])]
    public function sendContact(
        Request $request,
        MailerInterface $mailer,
        ValidatorInterface $validator
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        
        $constraints = new Assert\Collection([
            'name' => new Assert\NotBlank(),
            'email' => [new Assert\NotBlank(), new Assert\Email()],
            'message' => new Assert\NotBlank(),
        ]);

        $violations = $validator->validate($data, $constraints);

        if (count($violations) > 0) {
            return new JsonResponse(['errors' => (string)$violations], 400);
        }

        $email = (new \Symfony\Component\Mime\Email())
            ->from($data['email'])
            ->to('itieleliza@gmail.com') 
            ->subject('Nouveau message de contact')
            ->text("Nom: {$data['name']}\nEmail: {$data['email']}\n\nMessage:\n{$data['message']}");
        $mailer->send($email);

        return new JsonResponse(['status' => 'Message envoyé'], 200);
    }
}

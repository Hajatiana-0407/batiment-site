<?php

namespace App\DataFixtures;

use App\Entity\Client;
use App\Entity\Employe;
use App\Entity\Materiel;
use App\Entity\ModePaiement;
use App\Entity\Paiement;
use App\Entity\Pointage;
use App\Entity\Reservation;
use App\Entity\Role;
use App\Entity\Service;
use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher) {}

    public function load(ObjectManager $manager): void
    {

        $roleLabels = ['ROLE_ADMIN'];

        $user = new Users();
        $user->setEmail('admin@gmail.com');
        $hashedPassword = $this->passwordHasher->hashPassword($user, 'password');
        $user->setPassword($hashedPassword);
        $user->setRoles($roleLabels);

        $manager->persist($user) ; 
        $manager->flush();
    }
}

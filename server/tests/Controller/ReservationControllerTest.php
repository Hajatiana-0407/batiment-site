<?php

namespace App\Tests\Controller;

use App\Entity\Reservation;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class ReservationControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $manager;
    private EntityRepository $reservationRepository;
    private string $path = '/reservation/c/r/u/d/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->manager = static::getContainer()->get('doctrine')->getManager();
        $this->reservationRepository = $this->manager->getRepository(Reservation::class);

        foreach ($this->reservationRepository->findAll() as $object) {
            $this->manager->remove($object);
        }

        $this->manager->flush();
    }

    public function testIndex(): void
    {
        $this->client->followRedirects();
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Reservation index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first()->text());
    }

    public function testNew(): void
    {
        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'reservation[created_At]' => 'Testing',
            'reservation[statut_reservation]' => 'Testing',
            'reservation[montant_total]' => 'Testing',
            'reservation[Lieu_nettoyage]' => 'Testing',
            'reservation[Heures_nettoyage]' => 'Testing',
            'reservation[date_nettoyage]' => 'Testing',
            'reservation[charge]' => 'Testing',
            'reservation[client]' => 'Testing',
            'reservation[services]' => 'Testing',
            'reservation[materiel]' => 'Testing',
        ]);

        self::assertResponseRedirects($this->path);

        self::assertSame(1, $this->reservationRepository->count([]));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Reservation();
        $fixture->setCreated_At('My Title');
        $fixture->setStatut_reservation('My Title');
        $fixture->setMontant_total('My Title');
        $fixture->setLieu_nettoyage('My Title');
        $fixture->setHeures_nettoyage('My Title');
        $fixture->setDate_nettoyage('My Title');
        $fixture->setCharge('My Title');
        $fixture->setClient('My Title');
        $fixture->setServices('My Title');
        $fixture->setMateriel('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Reservation');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Reservation();
        $fixture->setCreated_At('Value');
        $fixture->setStatut_reservation('Value');
        $fixture->setMontant_total('Value');
        $fixture->setLieu_nettoyage('Value');
        $fixture->setHeures_nettoyage('Value');
        $fixture->setDate_nettoyage('Value');
        $fixture->setCharge('Value');
        $fixture->setClient('Value');
        $fixture->setServices('Value');
        $fixture->setMateriel('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'reservation[created_At]' => 'Something New',
            'reservation[statut_reservation]' => 'Something New',
            'reservation[montant_total]' => 'Something New',
            'reservation[Lieu_nettoyage]' => 'Something New',
            'reservation[Heures_nettoyage]' => 'Something New',
            'reservation[date_nettoyage]' => 'Something New',
            'reservation[charge]' => 'Something New',
            'reservation[client]' => 'Something New',
            'reservation[services]' => 'Something New',
            'reservation[materiel]' => 'Something New',
        ]);

        self::assertResponseRedirects('/reservation/c/r/u/d/');

        $fixture = $this->reservationRepository->findAll();

        self::assertSame('Something New', $fixture[0]->getCreated_At());
        self::assertSame('Something New', $fixture[0]->getStatut_reservation());
        self::assertSame('Something New', $fixture[0]->getMontant_total());
        self::assertSame('Something New', $fixture[0]->getLieu_nettoyage());
        self::assertSame('Something New', $fixture[0]->getHeures_nettoyage());
        self::assertSame('Something New', $fixture[0]->getDate_nettoyage());
        self::assertSame('Something New', $fixture[0]->getCharge());
        self::assertSame('Something New', $fixture[0]->getClient());
        self::assertSame('Something New', $fixture[0]->getServices());
        self::assertSame('Something New', $fixture[0]->getMateriel());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();
        $fixture = new Reservation();
        $fixture->setCreated_At('Value');
        $fixture->setStatut_reservation('Value');
        $fixture->setMontant_total('Value');
        $fixture->setLieu_nettoyage('Value');
        $fixture->setHeures_nettoyage('Value');
        $fixture->setDate_nettoyage('Value');
        $fixture->setCharge('Value');
        $fixture->setClient('Value');
        $fixture->setServices('Value');
        $fixture->setMateriel('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertResponseRedirects('/reservation/c/r/u/d/');
        self::assertSame(0, $this->reservationRepository->count([]));

    }
}

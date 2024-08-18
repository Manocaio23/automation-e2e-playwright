import { test, expect } from '@playwright/test';
import { title } from 'process';

test('pesquisar por nome do artista', async ({ page }) => {
 

  const song ={
    title: 'All The Small Sprints'

  }

  await page.goto('/');
  
  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito');

  //barra de pesquisa
  await page.fill('//*[@id="search-input"]', 'All The Small Sprints');
  await page.locator('//*[@id="root"]/div[1]/main/div/nav/div/button').click()

  const songCard = page.locator('.song').filter({hasText: song.title})
  await expect(songCard).toBeVisible({timeout: 2000})

});

test('pesquisar nao encontrada', async ({ page }) => {
 

  const song ={
    title: 'All The Small Sprints'

  }

  await page.goto('/');
  
  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito');

 
  await page.fill('//*[@id="search-input"]', 'All The Small Sprintssss');
  const validacao = page.locator('/html/body/div/div[1]/main/div/div/span')
  await expect(validacao).toHaveText('Desculpe, não encontramos nenhuma música com termo informado.');
  await page.waitForTimeout(5000) 

});



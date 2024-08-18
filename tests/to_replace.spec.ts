import { test, expect } from '@playwright/test';
import { title } from 'process';

test('tocar musica e executar próxima musica', async ({ page }) => {
 

  const song ={
    title: 'Bughium'

  }

  await page.goto('/');
  
  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito');

  //filtrando o texto 

  //elemento
  const songCard = page.locator('.song').filter({hasText: song.title})

  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')

  await play.click()
  await expect(pause).toBeVisible({timeout: 2000})
  await expect(play).toBeVisible({timeout: 171000})



//  await page.click('//*[@id="root"]/div[1]/main/div/div/section/div/div[3]/div/button')
  await page.waitForTimeout(5000) 




});




test('tocar musica e executar ultima musica da playerlist', async ({ page }) => {
 

  const song ={
    title: 'Bughium'

  }

  await page.goto('/');
  
  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito');

  //filtrando o texto 

  //elemento
  const songCard = page.locator('.song').filter({hasText: song.title})

  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')

  await play.click()
  await expect(pause).toBeVisible({timeout: 2000})
  await expect(play).toBeVisible({timeout: 171000})



//  await page.click('//*[@id="root"]/div[1]/main/div/div/section/div/div[3]/div/button')
  await page.waitForTimeout(5000) 




});


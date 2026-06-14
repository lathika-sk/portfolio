import fetch from 'node-fetch';
import fs from 'fs';

async function run() {
  const mainUrl = `https://id-preview--a769e11a-1ba2-4fe9-8e46-0c3c9dad791d.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9%2EeyJ1c2VyX2lkIjoiTVVNajd3bmVDd1FwNGxOYVFaY2g0VnpSZEk1MiIsInByb2plY3RfaWQiOiJhNzY5ZTExYS0xYmEyLTRmZTktOGU0Ni0wYzNjOWRhZDc5MWQiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImE3NjllMTFhLTFiYTItNGZlOS04ZTQ2LTBjM2M5ZGFkNzkxZCIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3ODE4NTkyMjAsIm5iZiI6MTc4MTI1NDQyMCwiaWF0IjoxNzgxMjU0NDIwfQ%2EAaok8fGs-hp3Y-mTeEwRa_vnuHkXqx2S52nf5GeMgyL_4vRPgVxMw3SZWIzVM_dFfCeXsNM18qXsr4B51_x36YUZeR2P_U5iFTKRZNSGPAIfqDz-atIztF0Vqvxk6NT1Eh4VQflKrDzWtkJOCQukOrapUYWhbXrb7Uoei_OApKknmOxr5eMHJ-ChrDQu66TRaTEwWTQ6oyYRyvklc9qFldyoxuJs3RfN60ASt3vgjumWqhWCgGE1ZeFAjPrY3gij-T7FVPk2LekxFAR5T15UU03dOgNjRc7QZam67ftccPIjJT-jcZLg2nw7RXEr0q0FF8vhYImjtbEsTxrmFq_Y9R4tAZ9PCTQwR8LMnEWTnz33_GSGhuFOTcIt4hsnET84Ua2f1ZGFkdPeIOH5InyDwt-t0Li9D0fHgDp79jYfZ25YrvCTKlDDrfWUryPuWx66bKlPYglEn7ouJhGH6SSAI1nNqkEjZnWD9y-PYe7PPnhKFUAuyV9yDfTiQmkf1R_uUULMy2NIYZoNgrgzMI6fgycWCTZzI-LkBgmhNEz_LP3XawI9tTep00xZdfDEb6VhJuK-qQkfgOQSk8VFqAnMINQ54f5OD1cU0fbI7FuXCBsTSN1qFsDLkVoy7H96m4S5oSCtKjWcn_FE5seyetAR06KUfbiCzXyCdCmbdjI7_bg`;

  try {
    const mainResponse = await fetch(mainUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const setCookies = mainResponse.headers.raw()['set-cookie'] || [];
    let authCookie = '';
    for (const cookie of setCookies) {
      if (cookie.startsWith('lovable-auth=')) {
        authCookie = cookie.split(';')[0];
        break;
      }
    }

    if (!authCookie) {
      console.log('lovable-auth cookie not found!');
      return;
    }

    const sceneUrl = `https://id-preview--a769e11a-1ba2-4fe9-8e46-0c3c9dad791d.lovable.app/assets/HeroScene-Dp2gmU43.js`;
    const response = await fetch(sceneUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': authCookie
      }
    });

    console.log('Status HeroScene JS:', response.status);
    const text = await response.text();
    fs.writeFileSync('./heroscene-source.js', text);
    console.log('Saved HeroScene-source. Length:', text.length);
    console.log('Sample content (1500 chars):');
    console.log(text.slice(0, 1500));
  } catch (err: any) {
    console.error('Error fetching HeroScene:', err.message);
  }
}

run();

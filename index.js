const puppeteer = require('puppeteer');
function delay(ms){
	return new Promise(function(resolve){
		setTimo=setTimeout(()=>{resolve("")},ms);
	})
}
(async function main(){
	try{

		// configuracao puppetter
		const  browser = await puppeteer.launch({headless: false});
		const page = await browser.newPage();
		const  userAegnt = "User Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";
		await page.setUserAgent(userAegnt);
		//navegacao para  whatsapp
		await page.goto("https://web.whatsapp.com");
		await page.waitForSelector("._3RGKj");/// selecao  configurar
		await delay(4000);
		//encontrando grupo ou contato
		//faltando identificar o  contato parte  mais  hard
		const edit = await page.$('div[data-testid="list-item-1"]');
		await edit.focus();
		const qtdOfMenssages = 10;
		//loop flood mensagems  enviadas
		for(let i = 0; 1 < qtdOfMenssages;i++){
			await page.evaluate(()=>{
				const message = "floodando 123... :/";
				document.execCommand("selectable-text", false, message);
			});
			await page.click("span[data-testid='send']");
			await delay(500)
		}
	}catch(error){
		console.log(error);
	}
})();

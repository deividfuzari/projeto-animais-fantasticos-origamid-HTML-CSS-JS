//Isolar a função para caso eu usar alguma variavel com o mesmo nome não ser do mesmo escopo

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    console.log(tabMenu)
    console.log(tabContent)

    //verificando pois precisa ter pelo menos 1 sessão mostrando, caso não carregue o JS de uma pessoa ai apareça todas as sessões de uma vez só.
    if (tabMenu.length && tabContent.length) {

        //deixar sempre a raposa como primeiro index com ativo para manter o texto
        tabContent[0].classList.add('ativo')

        //ativar a classe ativo a sessão desejada
        function activeTab(index) {

            //remover antes de todos as classe ativo
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })

            //adiciona ativo apenas no index passado na função
            tabContent[index].classList.add('ativo')
        }

        //aqui vamos passar por cada item dentro do tab menu a cada li que tem dentro a imagem, e passamos o index para pegar o mesmo index da imagem para ser o mesmo com a sessão do tabcontent
        tabMenu.forEach((item, index) => {

            //adicionando o evento em cada item em cada imagem para cada click será executado a função activeTab trazendo a sessão que tenha o mesmo index do item se foi clicado.
            item.addEventListener('click', () => {
                //esse index que vai para o activeTab é o index do item la do tabMenu
                activeTab(index)
            })

        })
    }
}

initTabNav() //ativar a função

function initAccordion() {
    const listaPergunta = document.querySelectorAll('.js-accordion dt')
console.log(listaPergunta)

    const ativo = 'ativo'

//verificar se realmente existe a lista de pergunta, se não tiver da erro no site.
    if (listaPergunta.length) {
        //manter os primeiros dt e dd ativos para a primeira pergunta ficar mostrando.
        listaPergunta[0].classList.add(ativo)
        listaPergunta[0].nextElementSibling.classList.add(ativo)



        function esconderPergunta (event) {
            //esse this em eventos se refere ao item que está sendo ativado a função do addEventListener, então esse this se refere a cada item clicado dentro da lista de ListaPergunta.
        this.nextElementSibling.classList.toggle(ativo)

        //deixar o item clicado ativo tambem, para quando abrir e fechar seja os 2 sendo a mesma ação.
        this.classList.toggle(ativo)
            
        }

        //cada dt dentro do faq
        listaPergunta.forEach((item) => {
            item.addEventListener('click', esconderPergunta)
        })

    }
}

initAccordion()

function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')
    console.log(linksInternos)
    
    //isso para podermos pegar o atributo de dentro do href de cada link interno, para podermos pegar cada section que tem tambem o mesmo ID.
    linksInternos.forEach((item)=>{
        console.log(item.getAttribute('href'))
    })
    
    
    function scrollSuave(event) {
    
        //basicamente para não ir em nenhum lugar quando clicamos
        event.preventDefault()
    
        //pegar o href de do elemento que for clicado ou melhor do link, e usamos aqui o event, mas estamos falando de cada link que está sendo clicado, vai ser pego o atributo href
        const href = event.currentTarget.getAttribute('href')
        
        //aqui pegamos o valor que vem da variavel de cima e colocamos dentro da variavel section, pois será o mesmo ID usado na html de cada section
        const section = document.querySelector(href)
    
        //basicamente usamos esse metodo para pegar a section como elemento e trazer ela para ser mostrada com o scroll, e passamos o comportamento do scroll e o block start quer dizer que será no inicio do bloco da section
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    
        //forma alternativa, essa é mais acessivel para outros navegadores.
        //const topo = section.offsetTop
        //window.scrollTo({
        //  top: WebTransportError,
        //  behavior: 'smooth',
        //})
    }
    
    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollSuave)
    
    })
}

initScroll()



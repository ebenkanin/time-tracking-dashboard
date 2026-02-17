const container = document.querySelector('.main');

const btn = document.querySelectorAll('.btn');

const cardTemplate = document.querySelector('template');



// fetch data from JSON file and store in local storage.


async function getData(){

    const response = await fetch('./data.json');

    const data = await response.json();

    return data


  

}


//Sending data to be stored in the local storage


function sendDataToLocalStorage(data){

    let localStorageData;

    if(localStorage.getItem('items') !== null){
        return;
    }else{
        localStorageData = data
        localStorage.setItem('items',JSON.stringify(localStorageData))
    }

    

}


// ********************* rendering data in the UI ******************************


// Grab the data from the local storage


function getDataFromLocalStorage(){
    let localStorageData;
    localStorageData = JSON.parse(localStorage.getItem('items'))

    const dataToBeRendered = localStorageData

    return dataToBeRendered;
        
    
}



// Display data from local storage in 

function cloneCards (dataToBeRendered){

    

    dataToBeRendered.forEach((item)=>{



    const templateClone = cardTemplate.content.cloneNode(true)

    const card = templateClone.querySelector('.card');

    const title = templateClone.querySelector('.title')

    const previous = templateClone.querySelector('.drilled-down')

    const mainData = templateClone.querySelector('.main-data')



    title.innerText = item.title;

    mainData.innerText = item.timeframes.weekly.current + 'hrs';

    previous.innerText = item.timeframes.weekly.previous +'hrs';

    switch(item.title){

         case 'Work':
            card.classList.add('bg-work', 'icon-work')
            
            break;
        
        case 'Play':
            card.classList.add('bg-play', 'icon-play')
            break;

        case 'Exercise':
            card.classList.add('bg-exercise', 'icon-exercise')
            break;

        case 'Study':
            card.classList.add('bg-study', 'icon-study')
            break;

        case 'Social':
            card.classList.add('bg-social', 'icon-social')
            break;

        case 'Self Care':
            card.classList.add('bg-self-care', 'icon-self-care')
            break;

            

            

    }
   



    container.appendChild(templateClone);

    



    })




    

}


//****************************** Filtering and rendering Filtered data ***********************************/


// remove cards function

function removeCards(){
    const existingCards = document.querySelectorAll('.card')

    existingCards.forEach((card)=>{
        card.remove();
    })
}



btn.forEach((button)=>{

    button.addEventListener('click', function(e){


        addFocusStyle()

        

        if(e.currentTarget.innerText === 'Daily'){

            console.log('btn clicked')

            removeCards();

          const data =  getDataFromLocalStorage()

          data.forEach((item)=>{

            const templateClone = cardTemplate.content.cloneNode(true)

            const card = templateClone.querySelector('.card');

            const title = templateClone.querySelector('.title')

            const previous = templateClone.querySelector('.drilled-down')

            const mainData = templateClone.querySelector('.main-data')



            title.innerText = item.title;

            mainData.innerText = item.timeframes.daily.current + 'hrs';

            previous.innerText = item.timeframes.daily.previous +'hrs';

            switch(item.title){

                case 'Work':
                    card.classList.add('bg-work', 'icon-work')
                    
                    break;
                
                case 'Play':
                    card.classList.add('bg-play', 'icon-play')
                    break;

                case 'Exercise':
                    card.classList.add('bg-exercise', 'icon-exercise')
                    break;

                case 'Study':
                    card.classList.add('bg-study', 'icon-study')
                    break;

                case 'Social':
                    card.classList.add('bg-social', 'icon-social')
                    break;

                case 'Self Care':
                    card.classList.add('bg-self-care', 'icon-self-care')
                    break;

                    

                    

            }

            container.appendChild(templateClone)

          })


        }else if(e.currentTarget.innerText === 'Monthly'){

            removeCards()


            const data =  getDataFromLocalStorage()

            data.forEach((item)=>{

            const templateClone = cardTemplate.content.cloneNode(true)

            const card = templateClone.querySelector('.card');

            const title = templateClone.querySelector('.title')

            const previous = templateClone.querySelector('.drilled-down')

            const mainData = templateClone.querySelector('.main-data')



            title.innerText = item.title;

            mainData.innerText = item.timeframes.monthly.current + 'hrs';

            previous.innerText = item.timeframes.monthly.previous +'hrs';

            switch(item.title){

                case 'Work':
                    card.classList.add('bg-work', 'icon-work')
                    
                    break;
                
                case 'Play':
                    card.classList.add('bg-play', 'icon-play')
                    break;

                case 'Exercise':
                    card.classList.add('bg-exercise', 'icon-exercise')
                    break;

                case 'Study':
                    card.classList.add('bg-study', 'icon-study')
                    break;

                case 'Social':
                    card.classList.add('bg-social', 'icon-social')
                    break;

                case 'Self Care':
                    card.classList.add('bg-self-care', 'icon-self-care')
                    break;

                    

                    

            }

            container.appendChild(templateClone)

          })

            



        }else{

            removeCards()

            const data =  getDataFromLocalStorage()

          data.forEach((item)=>{

            const templateClone = cardTemplate.content.cloneNode(true)

            const card = templateClone.querySelector('.card');

            const title = templateClone.querySelector('.title')

            const previous = templateClone.querySelector('.drilled-down')

            const mainData = templateClone.querySelector('.main-data')



            title.innerText = item.title;

            mainData.innerText = item.timeframes.weekly.current + 'hrs';

            previous.innerText = item.timeframes.weekly.previous +'hrs';

            switch(item.title){

                case 'Work':
                    card.classList.add('bg-work', 'icon-work')
                    
                    break;
                
                case 'Play':
                    card.classList.add('bg-play', 'icon-play')
                    break;

                case 'Exercise':
                    card.classList.add('bg-exercise', 'icon-exercise')
                    break;

                case 'Study':
                    card.classList.add('bg-study', 'icon-study')
                    break;

                case 'Social':
                    card.classList.add('bg-social', 'icon-social')
                    break;

                case 'Self Care':
                    card.classList.add('bg-self-care', 'icon-self-care')
                    break;

                    

                    

            }

            container.appendChild(templateClone)

          })
        }

    })

})




async function init(){

   const data = await getData()

    sendDataToLocalStorage(data)

    cloneCards(data)

    
}

init()


getDataFromLocalStorage()


function addFocusStyle(){
    btn.forEach((button)=>{
        button.addEventListener('click', ()=>{


            btn.forEach((item)=>{

                item.classList.remove('font-bold', 'text-orange-300')

            })

        button.classList.add('font-bold', 'text-orange-300')
            
        })
        
    })
}








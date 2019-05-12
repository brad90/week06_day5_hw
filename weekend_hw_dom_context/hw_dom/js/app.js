document.addEventListener('DOMContentLoaded', () => {

  const newFormInfo = document.querySelector('#form');
  newFormInfo.addEventListener('submit', handleFormInfoSubmit)

  // const deleteAllInfo = document.querySelector('#delete_all');
  // deleteAllInfo.addEventListener('click', handleDeleteAllInfo)

  console.log('Javascript loaded')

});


const handleFormInfoSubmit = function(event){

  event.preventDefault();

  const listItem = document.createElement('li');


  const listImage = document.createElement('IMG')
  const listH1 = document.createElement('h1');
  const listH3 = document.createElement('h3');
  const iconImage = document.createElement('IMG')



  const listP = event.target.select.value
  debugger
  listImage.src =event.target.imageSource.value
  const listPInteger = parseInt(listP)
  listH1.textContent = `${event.target.shareName.value}`
  listH3.textContent = `${event.target.marketCap.value}`
  iconImage.src = "http://www.clker.com/cliparts/t/2/A/5/2/O/star-green-favorite-md.png"

  iconImage.setAttribute("id", "icon")

  const numberOfStarsFunction = function(){
    for(let i=0;i<listP; i++){
      return iconImage
    }
  }

  numberOfStars = numberOfStarsFunction()

  listItem.appendChild(listImage)
  listItem.appendChild(listH1)
  listItem.appendChild(listH3)
  listItem.appendChild(numberOfStars)

  const pageList = document.querySelector('#share_list')
  pageList.appendChild(listItem)

  event.target.reset()

}

const handleDeleteAllInfo = function(event){
  const ulList = document.querySelector('#share_list')
  while (ulList.hasChildNodes()){
  ulList.removeChild(ulList.firstChild)
  }
}

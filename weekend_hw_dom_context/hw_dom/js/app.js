document.addEventListener('DOMContentLoaded', () => {

  const newFormInfo = document.querySelector('#form');
  newFormInfo.addEventListener('submit', handleFormInfoSubmit)

  const deleteAllInfo = document.querySelector('#delete_all');
  deleteAllInfo.addEventListener('click', handleDeleteAllInfo)

  console.log('Javascript loaded')

});


const handleFormInfoSubmit = function(event){

  event.preventDefault();

  const listItem = document.createElement('li');

  const listH1 = document.createElement('h1');
  const listH3 = document.createElement('h3');
  const listP = document.createElement('p');


  listH1.textContent = `${event.target.shareName.value}`
  listH3.textContent = `${event.target.marketCap.value}`
  listP.textContent = `${event.target.select.value}`

  listItem.appendChild(listH1)
  listItem.appendChild(listH3)
  listItem.appendChild(listP)

  const pageList = document.querySelector('#share_list')
  pageList.appendChild(listItem)
}

const handleDeleteAllInfo = function(event){
  const ulList = document.querySelector('#share_list')
  ulList.removeChild('li')
}

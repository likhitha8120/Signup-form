let nameIp= document.querySelector('#name')
let emailIp= document.querySelector('#email')
let passwordIp= document.querySelector('#password')
let cfPasswordIp= document.querySelector('#cpassword')
let mainDiv= document.querySelector('.main')
const submitBtn= document.querySelector('.subscribe')
submitBtn.addEventListener('click',()=>{
  // let checkPw= (passwordIp.value==cfPasswordIp.value)?true:window.alert('Please recheck the password you have typed')
  if (nameIp.value!=''&& (emailIp.value!='' && (passwordIp.value==cfPasswordIp.value)?true:window.alert('Please recheck the password you have typed'))){
    window.alert('Congratulations!...You have successfully subscribed. You are safe to close the site')
    // window.location.href= 'https://pixabay.com/illustrations/mickey-mouse-disneyland-disney-7230486/'
  }
  else{
    if (passwordIp.value==cfPasswordIp.value){
      window.alert('Please re-check the details')

    }
    if (nameIp.value ==''){
      nameIp.Style.border= '5px solid red'
    }


  }
})


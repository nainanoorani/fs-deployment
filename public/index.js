{/* <p>The launch was originally planned for Monday August 29th but was scrubbed due to a faulty sensor on one of the main SLS engines.</p> */}
const getInfoBtn = document.querySelector('button')
const pageContainer = document.querySelector('p')

const baseURL = `/api/launch`

const getAllInfo = () => axios.get(baseURL).then(alert('The initial launch attempt was scrubbed due to an engine cooling problem.'))
    

getInfoBtn.addEventListener('click', getAllInfo)


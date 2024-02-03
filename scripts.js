const postButton = document.getElementById('post-btn')
const postsContainer = document.querySelector('.posts')

postButton.addEventListener('click', () => {
  const textareaValue = document.getElementById('post-area').value

  const newPost = document.createElement('div')
  newPost.classList.add('post-main')
  newPost.innerHTML = `
    <div class="prof-img">
      <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
    </div>
    <div class="post-right">
      <div class="post-det">
        <h4>Name</h4>
        <h5>@Mayank</h5>
        <div class="post-right-btns">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
        </div>
      </div>
      <div class="post-txt-area">
        <p>${textareaValue}</p>
      </div>
      <div class="like-cmnt-btns">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#" class="heart-icon">
      </div>
    </div>
  `

  postsContainer.appendChild(newPost)

  const heartIcon = newPost.querySelector('.heart-icon')
  heartIcon.addEventListener('click', () => {
    newPost.classList.toggle('liked')

    if (newPost.classList.contains('liked')) {
      heartIcon.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455'
      //red
    } else {
      heartIcon.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679'
      //grey
    }
  })
})
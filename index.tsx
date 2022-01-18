

export const BlogInternalNavigation: React.FC = () =>
{ 
    return (
        <div className='col-lg-12 col-md-12'>
              <div className='pagination-area'>
                <div className='nav-links'>
                  <span className='page-numbers current'>1</span>
                  <a href='blog.html' className='page-numbers'>
                    2
                  </a>
                  <a href='blog.html' className='page-numbers'>
                    3
                  </a>
                  <a
                    href='blog.html'
                    className='next page-numbers'
                    title='Next Page'
                  >
                    <i className='bx bx-chevrons-right'></i>
                  </a>
                </div>
              </div>
            </div>
    )
}
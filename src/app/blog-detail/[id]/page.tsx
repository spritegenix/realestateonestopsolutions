import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'
import BlogSidebar from '../../components/blog-sidebar'
import Navbar from '../../components/navbar/navbar'
import ScrollToTop from '../../components/scroll-to-top'

import { blogData } from '../../data/data'

interface BlogData {
    id: number;
    image: string;
    date: string;
    title: string;
    desc: string;
    fullContent: string;
}

export default function Page({ params }: { params: { id: string } } ) {
    const data = blogData.find((item:BlogData)=>item.id === parseInt(params.id))   
  return (
    <div className='blog-page'>
        <Navbar transparent={false}/>   

        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Article Details</h2>
                        <span className="ipn-subtitle">In-depth Insights from Our Experts</span>
                    </div>
                </div>
            </div>
        </div>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="blog-details single-post-item format-standard">
                            <div className="post-details">
                                <div className="post-featured-img">
                                    <Image className="img-fluid" src={`${data?.image}`} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
                                </div>
                                {/* <div className="post-top-meta">
                                    <ul className="meta-comment-tag">
                                        <li><Link href="#"><span className="icons"><i className="ti-user"></i></span>by Ananya Sharma</Link></li>
                                        <li><Link href="#"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li>
                                    </ul>
                                </div> */}
                                <h2 className="post-title">{data?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: data?.fullContent || '' }} />
                                <div className="post-bottom-meta">
                                    <div className="post-tags">
                                        <h4 className="pbm-title">Related Tags</h4>
                                        <ul className="list">
                                            <li><Link href="#">Real Estate</Link></li>
                                            <li className='mx-2'><Link href="#">Property</Link></li>
                                            <li><Link href="#">Home Buying</Link></li>
                                            <li><Link href="#">Investment</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div className="post-share">
                                        <h4 className="pbm-title">Social Share</h4>
                                        <ul className="list mt-3">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-vk"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-tumblr"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                                {/* <div className="single-post-pagination">
                                    <div className="prev-post">
                                        <Link href="#">
                                            <div className="title-with-link">
                                                <span className="intro">Prev Post</span>
                                                <h3 className="title">Smart Home Investments</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="post-pagination-center-grid">
                                        <Link href="#"><i className="ti-layout-grid3"></i></Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="#">
                                            <div className="title-with-link">
                                                <span className="intro">Next Post</span>
                                                <h3 className="title">Future of Urban Living</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
{/*                         
                        <div className="blog-details single-post-item format-standard">
                            
                            <div className="posts-author">
                                <span className="img"><Image className="img-fluid" src='/img/user-1.jpg' width={120} height={120} alt=""/></span>
                                <h3 className="pa-name">Ananya Sharma</h3>
                                <ul className="social-links">
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                                <p className="pa-text">Ananya is a seasoned real estate expert with a passion for helping clients find their perfect property. Her insights are invaluable.</p>
                            </div>
                        </div> */}
                        
                        {/* <div className="blog-details single-post-item format-standard">
                            <div className="comment-area">
                                <div className="all-comments">
                                    <h3 className="comments-title">05 Comments</h3>
                                    <div className="comment-list">
                                        <ul>
                                            <li className="single-comment">
                                                <article>
                                                    <div className="comment-author">
                                                        <Image src='/img/user-1.jpg' width={100} height={100} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Priya Singh <span className="selected"><i className="fas fa-bookmark"></i></span></h4>
                                                                <div className="comment-date">13th March 2025</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <Link href="#" className="reply"><span className="icona"><i className="ti-back-left"></i></span> Reply</Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>This article truly resonated with me. The advice on navigating the market is incredibly helpful for new buyers.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <ul className="children">
                                                    <li className="single-comment">
                                                        <article>
                                                            <div className="comment-author">
                                                                <Image src='/img/user-2.jpg' width={100} height={100} alt=""/>
                                                            </div>
                                                            <div className="comment-details">
                                                                <div className="comment-meta">
                                                                    <div className="comment-left-meta">
                                                                        <h4 className="author-name">Rahul Verma</h4>
                                                                        <div className="comment-date">5th May 2025</div>
                                                                    </div>
                                                                    <div className="comment-reply">
                                                                        <Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p>I appreciate the detailed breakdown. It makes the whole process seem much less daunting. Great work!</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <ul className="children">
                                                            <li className="single-comment">
                                                                <article>
                                                                    <div className="comment-author">
                                                                        <Image src='/img/user-3.jpg' width={100} height={100} alt=""/>
                                                                    </div>
                                                                    <div className="comment-details">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-left-meta">
                                                                                <h4 className="author-name">Sneha Reddy</h4>
                                                                                <div className="comment-date">19th June 2025</div>
                                                                            </div>
                                                                            <div className="comment-reply">
                                                                                <Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-text">
                                                                            <p>Exactly what I needed to read today. The human touch in the writing is truly refreshing.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="single-comment">
                                                <article>
                                                    <div className="comment-author">
                                                        <Image src='/img/user-4.jpg' width={100} height={100} alt=""/>
                                                    </div>
                                                    <div className="comment-details">
                                                        <div className="comment-meta">
                                                            <div className="comment-left-meta">
                                                                <h4 className="author-name">Arjun Das</h4>
                                                                <div className="comment-date">20th June 2025</div>
                                                            </div>
                                                            <div className="comment-reply">
                                                                <Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>This article is a game-changer! It provides such clear and actionable steps for property buyers.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comment-box submit-form">
                                    <h3 className="reply-title">Post Comment</h3>
                                    <div className="comment-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Your Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <Link href="#" className="btn btn-primary rounded full-width">Submit Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop bg="theme-bg"/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

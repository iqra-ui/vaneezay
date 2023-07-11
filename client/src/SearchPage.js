import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { useSearch } from './context/Search';

const SearchPage = () => {
    const [values, setValues]= useSearch()
  return (
    <div className='container'>
        <div className='text-center mt-28'>
            <h1>SERACH RESULTS</h1>
            <h6>{values?.results.length < 1 ? 'no products found' : `found ${values?.results.length}`}</h6>

            <Container>
                <Row>
                <Col xs={9} sm={9} md={9} lg={9} xl={9} className="">
            
            <div className="w-100">
        
              <div
                className="flex flex-wrap  gap3"
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
              >
                {values?.results.map((p) => (
                //    <Link
                //    key={p._id}
                //    to={`/dashboard/admin/product/${p.slug}`}
                //    className="text-black  hover:text-black"
                //  >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={process.env.REACT_APP_API+`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                      <button className="btn btn-primary ms-1">
                        More Details
                      </button>
                      <button className="btn btn-secondary ms-1">
                        Add to card
                      </button>
                    </div>
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </Col>
                </Row>
            </Container>
        </div>
      
    </div>
  )
}

export default SearchPage
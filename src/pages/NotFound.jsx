import styled from "styled-components";

const Page404 = styled.div`
    padding:100px 0 250px;
    text-align:center;
`

const NotFound = () =>{
    return (
        <Page404>
            <h1>Page not found</h1>
        </Page404>
    )
}

export default NotFound;
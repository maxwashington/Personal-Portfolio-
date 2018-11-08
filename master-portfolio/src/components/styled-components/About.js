import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background: #E8E5E7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 879px ){
        height: 100%;

    }
`
export const DivWrap = styled.div`
    @media (max-width: 879px ){
        flex-direction: column;
        width: 100%;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    font-family: 'Muli', sans-serif;
`

export const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Muli', sans-serif;
    font-weight: 1000;
    padding: 5px 0;
    color: #656163;
`

export const LeftDiv = styled.div`
    width: 45%;
    height: 95%; 
    border-radius: 2%;
    overflow: auto;
    padding-top: 2%;
    background: #B6B8B8;
    box-shadow: 0 0 11px rgba(33,33,33,.2); 

      @media (max-width: 879px ){
        width: 100%;
        border-radius: 0px;
        border: none;
        box-shadow: none; 
    }
`
export const BotLeft = styled.div`
    height: 60%;
    overflow: auto;
    padding: 0 5%;
`

export const TopLeft = styled.div`
    height: 40%;
`

export const RightDiv = styled.div`
    width: 45%;
    height: 95%; 
    border-radius: 2%;
    padding: 2px 0;
    background: #B6B8B8;
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    
    @media (max-width: 879px ){
        width: 100%;
        border: none;
        border-radius: 0px;
        box-shadow: none; 
    }
`

export const Image = styled.img`
    width: 33%;
    height: auto;
    margin: 2% 0;
    border-radius: 50%;
`
export const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    
    align-items: center;
`
export const IconImage = styled.img`  
    width: 50%;
    height: auto;

     @media (max-width: 879px ){
        padding: 10%;
    }
`
export const IconImageCss = styled.img`  
    width: 36%;
    height: auto;

     @media (max-width: 879px ){
        padding: 6%;
    }
`

export const IconImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33.33%;
`

export const Text = styled.p`
    font-size: 2.3rem;
    font-family: 'Ovo', serif;
    line-height: 150%;
    text-align: center;
    overflow: auto;
`
export const BoldText = styled.p`
    font-size: 3rem;
    font-weight: 1000;
    margin-bottom: 2%;
    color: #24292F;

    @media (max-width: 881px) {
        font-size: 3rem;
    }
`
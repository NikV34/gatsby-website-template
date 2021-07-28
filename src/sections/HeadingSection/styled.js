import styled from 'styled-components';
import { devices } from '../../mixins';
import { ReactComponent as RightArrowIcon } from '../../assets/images/icons/rightArrow.svg';
import { ReactComponent as FactoryImage } from '../../assets/images/factory.svg';

export const Section = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    position: relative;
`;

export const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    @media ${devices.mobileS} {
        padding: 24px 16px 3px 16px;
    }
`;

export const RightArrow = styled(RightArrowIcon)`
    width: 16px;
    margin-left: ${({ $marginLeft }) => $marginLeft}px;
`;

export const FactoryImg = styled(FactoryImage)`
    width: 100vw;
    position: absolute;
    top: 194px;
    left: 0;
    margin-bottom: 32px;
    z-index: 0;
`;

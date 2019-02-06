import styled from 'styled-components';
import React from 'react';
import _ from 'lodash';

import { typography, colors } from '../styles';
import * as Themes from './MiniInputThemes';

const StyledMiniInput = styled.input`
    color: ${props => props.theme.color};
    border-radius: 2px;
    width: 40px;
    padding-left: 8px;
    padding-right: 8px;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.borderColor};
    &:focus {
        color: ${colors.green};
        border-color: ${colors.green};
    }
    ${typography.body2}
`;

const MiniInput = ({theme, value, onChange, onEnter}) =>
    <StyledMiniInput
        theme={theme}
        value={value}
        onKeyPress={(e) => {
            e.stopPropagation();
            if (e.key === 'Enter') {
            onEnter();
            }
        }}
        onChange={(e) => {
            e.stopPropagation();
            onChange(_.get(e, 'target.value'));
        }} />


MiniInput.defaultProps = {
    theme: Themes.darkTheme,
    value: '',
    onChange: _.noop,
    onEnter: _.noop,
}

export default MiniInput
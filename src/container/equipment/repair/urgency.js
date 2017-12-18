import React, { Component } from 'react';
import { NavBar, Icon,List, Radio} from 'antd-mobile';
import { hashHistory } from 'react-router';

/**
 * @summary 编辑工单 紧急度
 */
const RadioItem = Radio.RadioItem;
class UrgencyList extends Component {
    state = {
        value: this.props.location.state.urgentFlag,
    }
    onChange =(value) =>{
        this.setState({ value });
    }

    render(){
        const data = [
            { value: '30', label: '一般' },
            { value: '20', label: '急' },
            { value: '10', label: '紧急' },
          ];

          const { value } = this.state;

        return this.props.children || (
            <div>
                <NavBar
                className={'ysynet-header'}
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => hashHistory.push({pathname: '/equipment/editOrder',state: {...this.props.location.state,urgentFlag:this.state.value}})}
                >紧急度
                </NavBar>
                <div className={'ysynet-content'}>
                <List>
                    {data.map(i => (
                    <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                        {i.label}
                    </RadioItem>
                    ))}
                </List>
                </div>
            </div>
        )
    }
}
export default UrgencyList;
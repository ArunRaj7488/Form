import React,{ useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,Radio, Upload} from 'antd';

const { Option } = Select;

export default function AddVehicle() {
 
 let [visible, setVisible] = useState(false)

      const showDrawer = () => {
        setVisible({
          visible: true,
        });
      };
      const onClose = () => {
          setVisible({
            visible: false,
          });
        };
      const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

      const onChangeRC = (date, dateString)=> {
           console.log(date, dateString);
      }
      const onChangemodel = value => {
          console.log(`selected ${value}`);
        }

      const onBlur = () => {
          console.log('blur');
        }

      const onFocus = ()=> {
          console.log('focus');
        }

      const onSearch = val => {
        console.log('search:', val);
      }
  
    //const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Button type="primary" onClick={showDrawer}>
            <Icon type="plus" /> Add Vehicle
          </Button>
           <Drawer
              title="Add Vehicle"
              width={720}
              onClose={onClose}
              visible={visible}
              bodyStyle={{ paddingBottom: 80 }}
            >
            	<Form>
                <Row style={{marginBottom: '10px'}}>
                  <Col span={6}><label>Vehicle type:-</label></Col>
                  <Col span={6}>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a model"
                      optionFilterProp="children"
                      onChange={onChangemodel}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>

                  </Col>
                </Row>
                <Row>
                  <Col span={6}><label>Owner ID:-</label></Col>
                  <Col span={18}>
                <Radio.Group  defaultValue="a">
                  <Radio.Button value="a">Own Vehicle</Radio.Button>
                  <Radio.Button value="b">Self Attached</Radio.Button>
                  <Radio.Button value="c">Market place</Radio.Button>
                </Radio.Group>
                </Col>
                </Row>

                Registration Details:-
                <Row style={{marginBottom: '10px'}}>
                    <Col span={6}>
                        <lable>Vehicle Number:-</lable>
                    </Col>
                    <Col span={6}>
                       <Input type="text"  />
                    </Col>
                     <Col span={6} style={{marginLeft:"5px"}}>
                       <Input type="text" defaultValue="upload RC"/>
                    </Col>
                </Row>

                   <Row>
                     <Col span={8}>
                        <lable>RC expairy:-</lable>
                     </Col>
                         <Col span={12}> <DatePicker onChange={onChangeRC} />
                     </Col>
                  </Row>
                
                
                
                Model Details:-
                <Row style={{marginBottom: '10px'}}>
                <Col span={6}><lable>Model:-</lable></Col>
                <Col span={6} >
                 <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={onChangemodel}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                <Col span={6}><lable>Vehicle Photo:-</lable></Col>
                <Col span={6} style={{marginTop:"10px"}}>
                <Upload >
                    <Button>
                      <Icon type="upload" /> Upload
                    </Button>
                  </Upload>
                </Col>
                </Row>
               
                    
                    Permit Details:-
                
                <Row style={{marginBottom: '10px'}}>
                    <Col span={6}><lable>State:-</lable></Col>
                    <Col span={6}>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            >
                        </Select>
                    </Col>
                 </Row>
                
                
                <Row style={{marginBottom: '10px'}}>
                <Col span={6}><lable>Permit Expairy:-</lable></Col>
                <Col span={6} style={{marginTop:"5px"}}> <DatePicker onChange={onChangeRC} /></Col>
              </Row>
              
              
                  Insurance Details:-
                  <Row style={{marginBottom: '10px'}}>
                  <Col span={6}> <lable>Policy Number:-</lable></Col>
                  <Col span={6}> <Input type="text"  /></Col>
                  <Col span={6} style={{marginLeft:"5px"}}> <Input type="text" defaultValue="policy number"/></Col>
                  </Row>
                  <Row style={{marginBottom: '10px'}}>
                  <Col span={6}><lable>Policy expairy</lable> </Col>
                  <Col span={6}><DatePicker onChange={onChangeRC} /></Col>
                  </Row>
                  <Row style={{marginBottom: '10px'}}>
                  <Col span={6}><lable>Fitness certificate Number:-</lable></Col>
                  <Col span={6}> <Input type="text"  /></Col>
                  <Col span={6} style={{marginLeft:"10px"}}><Input type="text" defaultValue="certificate number"/></Col>
                  </Row>

                  
                  
                  <Row style={{marginBottom: '10px'}}><Col span={6}><lable>Fitness Period:-</lable></Col>
                  <Col span={6}><DatePicker onChange={onChangeRC} /></Col>
                  <Col sapn={6}> <DatePicker onChange={onChangeRC} /></Col>
                  </Row>
                  
                    
                   <Row style={{marginBottom: '10px'}} >
                   <Col span={6}><lable>Emissions certificate:-</lable></Col>
                   <Col span={6}><Input type="text" defaultValue="Emissions"/></Col>
                   </Row>
                    
                    <Row style={{marginBottom: '10px'}}>
                    <Col span={6}><lable>Emissions expairy</lable></Col>
                    <Col span={6}><DatePicker onChange={onChangeRC} /></Col>
                    </Row>
                    GPS Details:
                    <Row style={{marginBottom: '10px'}}>
                    <Col span={6}><lable>type:-</lable></Col>
                     <Row>
                    <Col span={6}><Radio.Group  defaultValue="a">
                   
                        <Col><Radio.Button value="a">Portable</Radio.Button></Col>
                        <Col><Radio.Button value="b">Attached</Radio.Button></Col>
                       
                     </Radio.Group></Col>
                      </Row>
                     </Row>

                     <Row style={{marginBottom: '10px'}}>
                     <Col span={6}><lable>Vender:-</lable></Col>
                     <Col spam={6}><Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a Vender"
                      optionFilterProp="children"
                      onChange={onChangemodel}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select></Col>
                    </Row>
                    <Row style={{marginLeft:"10px"}}>
                    <Col span={6}><lable>Device IMEI:-</lable></Col>
                    <Col span={6}><input type="text" /></Col>
                    </Row>


                    
        

              </Form>
              
              <div
                style={{
                  position: 'absolute', right: 0, bottom: 0,width: '100%',borderTop: '1px solid #e9e9e9',
                  padding: '10px 16px',background: '#fff',textAlign: 'right',
                }}
              >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={onClose} type="primary">
                  Submit
                </Button>
              </div>
            </Drawer>
      </div>
    ); 
}

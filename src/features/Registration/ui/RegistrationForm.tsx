'use client';
import { Input, Button, Form, Flex, Typography } from 'antd';
import React from 'react';
import Title from 'antd/es/typography/Title';
import FormItem from 'antd/es/form/FormItem';
import cls from './RegistrationForm.module.scss';
import Link from 'next/link';

export const RegistrationForm = () => {
    return (
        <Flex vertical>
            <Title className={cls.title_first} level={3} title="Register">
                Register
            </Title>
            <Typography.Text className={cls.title_second} color="" title="Join to us">
                JOIN TO US
            </Typography.Text>
            <Form size="large" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ width: 503 }}>
                <FormItem name="name" label="Your name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    <Input className={cls.input} autoFocus={true} placeholder="Jhon Deo" />
                </FormItem>
                <FormItem name="email" label="Email Address" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    <Input className={cls.input} placeholder="Example@gmail.com" />
                </FormItem>
                <FormItem name="password" label="Password" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    <Input.Password className={cls.input} type="password" placeholder="...." />
                </FormItem>
                <FormItem name="confirmpassword" label="Confirm password" style={{ fontWeight: 'bold', marginBottom: '35px' }}>
                    <Input.Password className={cls.input} type="password" placeholder="...." />
                </FormItem>
                <FormItem>
                    <Button className={cls.button} type="primary" shape="default">
                        REGISTER
                    </Button>
                </FormItem>
                <Flex>
                    <Typography.Text className={cls.label_signup}>ALREADY USER ?&nbsp;</Typography.Text>
                    <Link className={cls.link_signup} href={'/home/pages/login'}>
                        LOGIN
                    </Link>
                </Flex>
            </Form>
        </Flex>
    );
};

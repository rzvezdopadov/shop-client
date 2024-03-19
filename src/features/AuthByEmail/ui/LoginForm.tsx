'use client';
import { Input, Button, Form, Flex, Typography } from 'antd';
import React from 'react';
import Title from 'antd/es/typography/Title';
import FormItem from 'antd/es/form/FormItem';
import cls from './LoginForm.module.scss';
import Link from 'next/link';

export const LoginForm = () => {
    return (
        <Flex vertical>
            <Title className={cls.title_first} level={3} title="Welcome Back">
                Welcome Back
            </Title>
            <Typography.Text className={cls.title_second} color="" title="Welcome Back">
                LOGIN TO CONTINUE
            </Typography.Text>
            <Form size="large" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ width: 503 }}>
                <FormItem name="email" label="Email Address" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    <Input className={cls.input} autoFocus={true} placeholder="Example@gmail.com" />
                </FormItem>
                <FormItem name="password" label="Password" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    <Input.Password className={cls.input} type="password" placeholder="...." />
                </FormItem>
                <FormItem>
                    <Link className={cls.link_forgot} href={'/'}>
                        Forgot Password ?
                    </Link>
                </FormItem>
                <FormItem>
                    <Button className={cls.button} type="primary" shape="default">
                        Login
                    </Button>
                </FormItem>
                <Flex>
                    <Typography.Text className={cls.label_signup}>NEW USER ?&nbsp;</Typography.Text>
                    <Link className={cls.link_signup} href={'/'}>
                        SIGN UP
                    </Link>
                </Flex>
            </Form>
        </Flex>
    );
};

/**
 * Created by yongyuehuang on 2017/3/28.
 */
import React from 'react';
import renderer from 'react-test-renderer';
const getBook = require('../src/actions/book');
import instance from '../src/utils/instance';
const receiveHotSearch = require('../src/actions/search');

test('首页得到书籍列表', () => {
    expect(getBook).toThrowError();
});

test('async/await 函数测试', async () => {
    await expect(instance.get(`/book/list`)).resolve;
});

test('测试搜索action === RECEIVE_HOT_SEARCH', () => {
    expect(receiveHotSearch)
})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

function sum(a, b) {
    return a + b;
}
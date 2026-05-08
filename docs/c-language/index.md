---
title: C 语言学习笔记
tags: [C语言, C99, 数据结构, 算法]
date: 2026-04-10
---

# 哎呦我 C 语言**牛逼**

以下采用 C99 标准（大概?）

```bash
gcc -std=c99
```

## 标准头文件

这个标准是**我认为**的标准，正常够用

```c
#include <stdio.h>   // 标准输入输出（printf, scanf, fopen）
#include <stdlib.h>  // 通用工具（malloc, free, rand, atoi）
#include <string.h>  // 字符串操作（strcpy, strlen, strcmp）
#include <math.h>    // 数学函数（sin, cos, sqrt, pow）
#include <stdint.h>  // 固定宽度整数类型（int32_t, uint64_t）
#include <stdbool.h> // 布尔类型（bool, true, false）
#include <tgmath.h>  // 类型通用数学函数（自动匹配float/double）
#include <complex.h> // 复数运算（creal, cimag, cabs）
```

## 关于输入

```c
while (scanf("%d %d", &a, &b) != EOF); //不定数
//int型%d,64位整数%lld,字符%c,字符串%s,浮点数%f,%lf

gets(str); //读字符串,读一行,使用%s格式符的scanf会读到空格为止

freopen("c:\\input.txt","r",stdin); //标准输入重定向到文件
```

## 关于输出

```c
printf("%1.2f\n", 3.14); //格式符与输入一致，多的部分是浮点数的格式化输出：
// %f 是默认浮点数（6位小数）；以下5和2都是示例；
// %.2f 保留2位小数（四舍五入）；
// %5.2f 总宽度至少为5（含小数点），保留2位小数，宽度不足5默认右对齐，前补空格；
// %-5.2f 其余与前一个相同，但是左对齐（后补空格）；
// %05.2f 右对齐，但是前不补空格，补0；
// result = round(result * 100) / 100;可以把result保留两位小数

puts(str); //输出字符串

freopen("output.txt", "w", stdout); //标准输出重定向到文件
```

## 关于数组

```c
int arr[5]; //一维整数数组

int n = 5; int arr[n];  // 一维变长数组，c99神力

int matrix[2][3]; //二维整数数组

int arr[5] = {[2] = 10, [4] = 20}; //指定初始化
```

## 关于字符串

```c
char str[5]; //字符串就是字符数组,但是合法字符串必须以\0结尾
//以下为相关常用函数，const表示定量，即只读
size_t strlen(const char *s) //计算字符串长度（不含\0）

char *strcpy(char *dest, const char *src) //完整复制字符串（含\0）src->dest

char *strncpy(char *dest, const char *src, size_t n) //限制复制长度,复制src前n位（需手动补\0）

char *strcat(char *dest, const char *src) //追加字符串到dest末尾

char *strncat(char *dest, const char *src, size_t n) //限制追加长度（自动补\0）

int strcmp(const char *s1, const char *s2) //完整字符串比较，相同返回0，逐字符比较其 ASCII 码值

int strncmp(const char *s1, const char *s2, size_t n) //只比较前n字符

char *strchr(const char *s, int c) //首次出现字符c位置，返回其指针

char *strrchr(const char *s, int c) //末次出现字符位置

char *strstr(const char *haystack, const char *needle) //子字符串查找，在*haystack查找*needle
```

## 关于指针

用于存储另一个变量的内存地址

```c
//解引用运算符 *;取地址运算符 &
int *p;    // 指向int类型的指针，此时p表示地址，*p表示该数据

int num = 42; int *p_num = &num;  // 此时p_num存储num的地址，*p_num相当于num,p_num相当于&num

int *p2 = NULL;  // 空指针（避免野指针）

int arr[5] = {1, 2, 3, 4, 5}; int *p_arr = arr;  // 数组名本身就代表数组首元素的地址，此时 p_arr = &arr[0] = arr

//指针允许在函数中修改外部变量的值
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 1, y = 2;
swap(&x, &y);  // 交换x和y的值

//const指针可以保护函数内不修改参数
void printString(const char *str) {
    // str[0] = 'H';  // 错误：不能修改const内容
    printf("%s\n", str);
}
```

## 关于结构体

```c
struct Student {
    int id;          // 学号
    char name[20];   // 姓名
    float score;     // 分数
} Student1; //结构体定义，相当于包含不同类型元素的集合，这里的Student是一个结构体类型;Student1是一个实例，相当于下面的s1,s2;Student或者Student1可以任意删除其一，定义依旧合法

struct Student s1 = {101, "Alice", 95.5};
struct Student s2 = {.score = 98.0, .id = 102}; // 两种都可以初始化一个学生，后者未初始化成员自动置0

//结构体嵌套
struct Date {
    int year, month, day;
};

struct Person {
    char name[20];
    struct Date birth;  // 嵌套结构体
};

//结构体指针与访问
struct Student s = {101, "Alice", 95.5};
struct Student *ps = &s;

printf("%d\n", ps->id);     // ps->id等价于 (*ps).id,等价于s.id
ps->score = 98.0;           // 也可以通过指针修改
```

## 关于链表

```c
struct ListNode {
    int val;                 // 数据域
    struct ListNode *next;   // 指针域（指向下一个节点）
}; //这是一个单链表，通过结构体定义

struct DoublyListNode {
    int val;
    struct DoublyListNode *prev;  // 前驱指针
    struct DoublyListNode *next;  // 后继指针
}; //双链表

struct ListNode* createNode(int val) {
    struct ListNode *node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;  // 初始化next为NULL
    return node;
} //创建链表首节点
```

## 关于树

```c
typedef struct TreeNode {
    int val;                  // 节点值
    struct TreeNode *left;    // 左子节点
    struct TreeNode *right;   // 右子节点
} TreeNode; //二叉树定义，相当于双链表
```

## 关于函数

```c
return_type function_name(parameter_list) {
    // 函数体
    return value;  // 可选（void类型不返回）
} //函数定义

int factorial(int n) {
    if (n == 0) return 1;  // 基线条件
    return n * factorial(n - 1);  // 递归调用
} //递归调用函数，示例是求n的阶乘
```

## 关于一些具体的语法

```c
typedef unsigned long ulong; //相当于取别名，用于提升代码可读性
#define PI 3.1415926 //宏替换，直接将代码中所有相关部分替换


for (int i = 0; i < 3; i++) {
    int j = i * 2;  // j的作用域仅在此循环体内，退出循环不可访问
} // for循环语句示例，初始化直接定义（int i = 0）需要c99标准;
for ( ; i < 10; ) {
}
for (int i = 0, j = 10; i < j; i++, j--) {
}
// 初始化; 条件判断; 增量表达式均可为空，也可同时存在多句
// 在循环中continue用于退出当次循环，break用于直接退出循环语句

switch (表达式) {
    case 常量1: 语句1; break;
    case 常量2: 语句2; break;
    default: 默认语句;
} //switch-case 语句（多分支选择），相当于多层if-else

条件 ? 表达式1 : 表达式2; //条件运算符，用于简化if-else的简单条件赋值。
```

## 关于排序

```c
//快速排序：(给出的案例是从小到大排序)
int cmp(const void *a, const void *b) {
    if (*a < *b) return -1;
    if (*a > *b) return 1;
    return 0;
}

qsort(student, num, sizeof(Student), cmp); //student为首地址，num为个数，cmp为自定义比较函数，若要从小到大排序则<返回-1，>返回1，相等返回0

//冒泡排序：(给出的案例同样是从小到大排序)
for (int i = 1; i < num; i++) {
    for (int j = 1; j <num; j ++) {
        if (student[j] < student[j-1]) {
            sign = student[j];
            student[j] = student[j-1];
            student[j-1] = sign;
        }
    }
}
```

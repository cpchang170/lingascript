namespace ts {
    export const unicodeDic = {
        Keywords: {
            maxLength: 2,
            minLength: 1,
            abstract: "抽象",
            any: "任意",
            as: "转为",
            bigint: "大数",
            boolean: "真假",
            break: "跳出",
            case: "如为",
            catch: "捕获",
            class: "类别",
            continue: "继续",
            const: "常量",
            constructor: "构造",
            debugger: "调试",
            declare: "声明",
            default: "默认",
            delete: "删除",
            do: "运行",
            else: "否则",
            enum: "枚举",
            export: "导出",
            extends: "扩展",
            false: "假的",
            finally: "善后",
            for: "循环",
            from: "来自",
            function: "函数",
            get: "获取",
            if: "如果",
            implements: "实现",
            import: "导入",
            in: "位于",
            infer: "推断",
            instanceof: "身为",
            interface: "接口",
            is: "作为",
            keyof: "键为",
            let: "变量",
            module: "模块",
            namespace: "名域",
            never: "不及",
            new: "新建",
            null: "空值",
            number: "数字",
            object: "实例",
            package: "包装",
            private: "私有",
            protected: "保护",
            public: "公开",
            readonly: "只读",
            require: "需要",
            global: "全局",
            return: "返回",
            set: "设置",
            static: "静态",
            string: "文字",
            super: "父级",
            switch: "假如",
            symbol: "符号",
            this: "本体",
            throw: "丢出",
            true: "真的",
            try: "尝试",
            type: "类型",
            typeof: "类为",
            undefined: "未定",
            unique: "唯一",
            unknown: "未知",
            var: "全局变量",
            void: "空的",
            while: "直到",
            with: "外扩",
            yield: "获得",
            async: "异步",
            await: "等待",
            of: "之于"
        },
        RegexUn: {
            fullTripleSlashReferencePathRegExUn: /^(\/\/\/\s*<引用\s+路径\s*=\s*)('|")(.+?)\2.*?\/>/,
            fullTripleSlashReferenceTypeReferenceDirectiveRegExUn: /^(\/\/\/\s*<引用\s+类型\s*=\s*)('|")(.+?)\2.*?\/>/,
            fullTripleSlashAMDReferencePathRegExUn: /^(\/\/\/\s*<AMD-附件\s+路径\s*=\s*)('|")(.+?)\2.*?\/>/,
            defaultLibReferenceRegExUn: /^(\/\/\/\s*<引用\s+不用默认库\s*=\s*)('|")(.+?)\2\s*\/>/,
        },
        TripleSlash: {
            reference: "引用",
            path: "路径",
            types: "类型",
            amd_dependency: "AMD-附件",
            amd_module: "AMD-模块",
            no_default_lib: "不用默认库",
            name: "名称",
            true: "真",
            ts_check: "ts-检查",
            ts_nocheck: "ts-不检查",
            jsx: "jsx",
            factory: "工厂"
        },
        InternalType: {
            unknown: "未知",
            array: "数组",
            args: "参数组",
            ReadonlyArray: "只读数组_",
            ThisType: "本体类型_",
            IArguments: "增强参数接口_",
            Void: "无值_",
            Undefined: "未定_",
            Null: "空值_",
            Symbol: "符号_",
            Array: "数组_",
            Object: "实例_",
            Function: "函数_",
            String: "文字_",
            Number: "数字_",
            Boolean: "真假_",
            RegExp: "正则_",
            TemplateStringsArray: "模板文字数组_",
            TypedPropertyDescriptor: "类型属性描述符_",
            PromiseConstructorLike: "类预设构造函数_",
            NonNullable: "非可空_",
        },
        Promise: {
            promise: "预设",
            then: "然后",
            Promise: "预设_"
        },
        Iterator: {
            value: "值",
            next: "下个",
            AsyncIterable: "异步可迭代_",
            AsyncIterableIterator: "异步可迭代迭代器_",
            Iterable: "可迭代_",
            Iterator: "迭代器_",
            IterableIterator: "可迭代迭代器_"
        },
        Array: {
            length: "长度",
            concat: "连接",
            slice: "分裂",
            push: "压入",
            unshift: "推出"
        },
        Function: {
            apply: "应用",
            bind: "绑定",
            call: "调用",
            caller: "访问者",
            name: "名称",
            eval: "执行",
            length: "长度",
            arguments: "增强参数"
        },
        Object: {
            prototype: "原型",
        },
        JavaScript: {
            use_strict: "严格模式",
            global: "全局",
            self: "自身",
            window: "窗口",
            exports: "输出"
        },
        JSDoc: {
            augments: "继承",
            extends: "扩展",
            class: "类",
            prop: "属性",
            property: "特性",
            constructor: "构造函数",
            arg: "实参",
            argument: "增强参数",
            param: "参数",
            return: "返回",
            returns: "返回组",
            template: "模板",
            type: "类型",
            typedef: "类型定义"
        },
        Jsx: {
            IntrinsicElements: "内置元素_",
            ElementClass: "元素类_",
            ElementAttributesProperty: "元素特性属性_"
        },
        Symbol: {
            Symbol: "符号_",
            for: "为了"
        },
        MetaData: {
            target: "目标",
            length: "长度",
            meta: "元数据"
        },
        Lib: {
            Infinity: "无穷大_",
            NaN: "非数字_",
            Console: "控制台_",
            console: "控制台"
        },
        Types: {
            typeDefinitionDirSuffix: "@types-zh-cn"
        },
        Language: {
            language: "zh-CN"
        },
        golbalType: {
            AsyncIterable: "异步可迭代_",
            AsyncIterableIterator: "异步可迭代迭代器_",
            Iterable: "可迭代_",
            Iterator: "迭代器_",
            IterableIterator: "可迭代迭代器_",
            AsyncIterator: "异步迭代器_",
            TemplateStringsArray: "模板文字数组_",
            TypedPropertyDescriptor: "类型属性描述符_",
            PromiseConstructorLike: "类预设构造函数_",
            Symbol: "符号_",
            Promise: "预设",
            IArguments: "增强参数接口_",
            Array: "数组_",
            Object: "实例_",
            Function: "函数_",
            String: "文字_",
            Number: "数字_",
            Boolean: "真假_",
            RegExp: "正则_",
            NonNullable: "非可空_",
            ReadonlyArray: "只读数组_",
            ThisType: "本体类型_",
            JSX: "JSX",
        }
    };
}

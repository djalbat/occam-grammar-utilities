"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _occamlexers = require("occam-lexers");
const _occamparsers = require("occam-parsers");
const _index = require("../index");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
const _startRuleName = /*#__PURE__*/ _interop_require_default(require("./view/input/startRuleName"));
const _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./view/textarea/adjustedBNF"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { rulesAsString } = _occamparsers.rulesUtilities, { rulesFromEntries, lexerFromRules } = _occamlexers.lexerUtilities, { rulesFromBNF, parserFromRulesAndStartRuleName } = _occamparsers.parserUtilities;
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        this.update();
    };
    changeHandler = (event, element)=>{
        this.update();
    };
    update() {
        const bnf = this.getBNF(), startRuleName = this.getStartRuleName(), lexicalEntries = this.getLexicalEntries();
        let rules = rulesFromBNF(bnf);
        rules = (0, _index.eliminateLeftRecursion)(rules); ///
        const multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
        this.setAdjustedBNF(adjustedBNF);
        const exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries), exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName);
        const content = this.getContent(), tokens = exampleLexer.tokenise(content), node = exampleParser.parse(tokens);
        let parseTree = null;
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        this.setParseTree(parseTree);
    }
    childElements() {
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
            readOnly: true
        }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))));
    }
    initialise() {
        this.assignContext();
        const { initialBNF, initialContent, initialLexicalEntries, initialStartRuleName } = this.constructor, bnf = initialBNF, content = initialContent, lexicalEntries = initialLexicalEntries, startRuleName = initialStartRuleName; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setLexicalEntries(lexicalEntries);
        this.setStartRuleName(startRuleName);
        this.update();
    }
    static initialBNF = `S ::= T... <END_OF_LINE> ;  

A ::=  T ( ) 

    |  Y ( )
               
    |  U

    ;

T  ::=  "-"<NO_WHITESPACE>A

     |  A "÷" A 
                   
     |  "z" 
    
     ;`;
    static initialContent = `--z
`;
    static initialStartRuleName = "";
    static initialLexicalEntries = [
        {
            "symbol": "z|-"
        },
        {
            "unassigned": "."
        }
    ];
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;
function exampleLexerFromLexicalEntries(lexicalEntries) {
    const entries = lexicalEntries, rules = rulesFromEntries(entries), exampleLexer = lexerFromRules(_index.ExampleLexer, rules);
    return exampleLexer;
}
function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
    const exampleParser = parserFromRulesAndStartRuleName(_index.ExampleParser, rules, startRuleName);
    return exampleParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbGV4ZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcywgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEV4YW1wbGVMZXhlciwgRXhhbXBsZVBhcnNlciwgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBydWxlc0Zyb21FbnRyaWVzLCBsZXhlckZyb21SdWxlcyB9ID0gbGV4ZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKTtcblxuICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICBjb25zdCBleGFtcGxlTGV4ZXIgPSBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpLFxuICAgICAgICAgIGV4YW1wbGVQYXJzZXIgPSBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gZXhhbXBsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxFbnRyaWVzLCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFMgOjo9IFQuLi4gPEVORF9PRl9MSU5FPiA7ICBcblxuQSA6Oj0gIFQgKCApIFxuXG4gICAgfCAgWSAoIClcbiAgICAgICAgICAgICAgIFxuICAgIHwgIFVcblxuICAgIDtcblxuVCAgOjo9ICBcIi1cIjxOT19XSElURVNQQUNFPkFcblxuICAgICB8ICBBIFwiw7dcIiBBIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICB8ICBcInpcIiBcbiAgICBcbiAgICAgO2A7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYC0telxuYDtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbEVudHJpZXMgPSBbXG4gICAge1xuICAgICAgXCJzeW1ib2xcIjogXCJ6fC1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bmFzc2lnbmVkXCI6IFwiLlwiXG4gICAgfSxcbiAgXTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgZXhhbXBsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoRXhhbXBsZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGV4YW1wbGVMZXhlcjtcbn1cblxuZnVuY3Rpb24gZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3QgZXhhbXBsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoRXhhbXBsZVBhcnNlciwgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBleGFtcGxlUGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInBhcnNlclV0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsInJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImV4YW1wbGVMZXhlciIsImV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyIsImV4YW1wbGVQYXJzZXIiLCJleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwic2V0U3RhcnRSdWxlTmFtZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJpZXMiLCJFeGFtcGxlTGV4ZXIiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvS0E7OztlQUFBOzs7c0VBbEtzQjtzQkFFRTs2QkFDTzs4QkFDaUI7dUJBQ29COzRCQUNBO21FQUU3QztpRUFDQzs0REFDQTtnRUFDSTtrRUFDRTtzRUFDQztvRUFDQzt1RUFDRzs7Ozs7O0FBRW5DLE1BQU0sRUFBRUEsYUFBYSxFQUFFLEdBQUdDLDRCQUFjLEVBQ2xDLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUUsR0FBR0MsMkJBQWMsRUFDckQsRUFBRUMsWUFBWSxFQUFFQywrQkFBK0IsRUFBRSxHQUFHQyw2QkFBZTtBQUV6RSxNQUFNQyxhQUFhQyxhQUFPO0lBQ3hCQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCLElBQUksQ0FBQ0MsTUFBTTtJQUNiLEVBQUM7SUFFREMsZ0JB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
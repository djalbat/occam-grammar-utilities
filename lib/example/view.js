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
      
      T ::= "-"<NO_WHITESPACE>A
       
          | A "-" A 
              
          | "z"
          
          ;
      
      A ::= T ( ) 
      
          | U
      
          ;
          
      U ::= . ;`;
    static initialContent = `--z
`;
    static initialStartRuleName = "";
    static initialLexicalEntries = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbGV4ZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcywgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEV4YW1wbGVMZXhlciwgRXhhbXBsZVBhcnNlciwgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBydWxlc0Zyb21FbnRyaWVzLCBsZXhlckZyb21SdWxlcyB9ID0gbGV4ZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKTtcblxuICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICBjb25zdCBleGFtcGxlTGV4ZXIgPSBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpLFxuICAgICAgICAgIGV4YW1wbGVQYXJzZXIgPSBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gZXhhbXBsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxFbnRyaWVzLCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFMgOjo9IFQuLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICBcbiAgICAgIFQgOjo9IFwiLVwiPE5PX1dISVRFU1BBQ0U+QVxuICAgICAgIFxuICAgICAgICAgIHwgQSBcIi1cIiBBIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB8IFwielwiXG4gICAgICAgICAgXG4gICAgICAgICAgO1xuICAgICAgXG4gICAgICBBIDo6PSBUICggKSBcbiAgICAgIFxuICAgICAgICAgIHwgVVxuICAgICAgXG4gICAgICAgICAgO1xuICAgICAgICAgIFxuICAgICAgVSA6Oj0gLiA7YDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgLS16XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFtcbiAgICB7XG4gICAgICBcInVuYXNzaWduZWRcIjogXCIuXCJcbiAgICB9LFxuICBdO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgY29uc3QgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBleGFtcGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhFeGFtcGxlTGV4ZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZXhhbXBsZUxleGVyO1xufVxuXG5mdW5jdGlvbiBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBleGFtcGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShFeGFtcGxlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGV4YW1wbGVQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyRnJvbVJ1bGVzIiwibGV4ZXJVdGlsaXRpZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwicGFyc2VyVXRpbGl0aWVzIiwiVmlldyIsIkVsZW1lbnQiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZXhhbXBsZUxleGVyIiwiZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzIiwiZXhhbXBsZVBhcnNlciIsImV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxFbnRyaWVzIiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJzZXRTdGFydFJ1bGVOYW1lIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllcyIsIkV4YW1wbGVMZXhlciIsIkV4YW1wbGVQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlLQTs7O2VBQUE7OztzRUEvSnNCO3NCQUVFOzZCQUNPOzhCQUNpQjt1QkFDb0I7NEJBQ0E7bUVBRTdDO2lFQUNDOzREQUNBO2dFQUNJO2tFQUNFO3NFQUNDO29FQUNDO3VFQUNHOzs7Ozs7QUFFbkMsTUFBTSxFQUFFQSxhQUFhLEVBQUUsR0FBR0MsNEJBQWMsRUFDbEMsRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRSxHQUFHQywyQkFBYyxFQUNyRCxFQUFFQyxZQUFZLEVBQUVDLCtCQUErQixFQUFFLEdBQUdDLDZCQUFlO0FBRXpFLE1BQU1DLGFBQWFDLGFBQU87SUFDeEJDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckIsSUFBSSxDQUFDQyxNQUFNO0lB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
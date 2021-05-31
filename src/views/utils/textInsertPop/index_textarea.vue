<template>
  <div>
    <div className="{styles.normal}">
      <Button @click="click">点击</Button>
      <div className="{styles.wrapper}" id="mytextarea">
        <TextArea id="box" value="{data}" onChange="{this.changeTextArea}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      const TextArea = document.querySelector("#box");
      this.insertAtCaret(TextArea, "( 我是插入的内容 )");
    },
    insertAtCaret(textObj, textFeildValue) {
      if (document.all) {
        if (textObj.createTextRange && textObj.caretPos) {
          var caretPos = textObj.caretPos;
          caretPos.text =
            caretPos.text.charAt(caretPos.text.length - 1) == "   "
              ? textFeildValue + "   "
              : textFeildValue;
        } else {
          textObj.value = textFeildValue;
        }
      } else {
        if (textObj.setSelectionRange) {
          debugger;
          var rangeStart = textObj.selectionStart;
          var rangeEnd = textObj.selectionEnd;
          var tempStr1 = textObj.value.substring(0, rangeStart);
          var tempStr2 = textObj.value.substring(rangeEnd);
          textObj.value = tempStr1 + textFeildValue + tempStr2;
        } else {
          console.log(
            "This   version   of   Mozilla   based   browser   does   not   support   setSelectionRange"
          );
        }
      }
    },
  },
};
</script>
<style scoped lang="less"></style>

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  $(document).ready(function() {
      const block;

     //display data
      function checkForWin() {
          const gameWon = false;
         $('[data-stack]').each(function () {
             if ($(this).data('stack') !== 1 && $(this).children().length === 4) {
         $("[data-stack]").each(function () {
           if ($(this).data("stack") !== 1 && $(this).children().length === 4) {
                  gameWon = true;
              }
          });
          return gameWon;
      }

     $('[data-stack]').on('click', function() {
     //move pieces, listen for clicks, check for good move
     $("[data-stack]").on("click", function() {
          if (!block) {
              block = $(this).children().last().detach();
          } else {
             if ( !$(this).children().last().data('block') || $(this).children().last().data('block') > $(block).data('block') ) {
             if ( !$(this).children().last().data("block") || $(this).children().last().data("block") > $(block).data("block") ) {
                  $(this).append(block);
                  block = null;
              }

     //winner announcement
              if (checkForWin()) {
                 $('#announce-game-won').text('Winner!');
                 $("#announce-game-won").text("Winner!");
              }
          }
      });
     FastClick.attach(document.body);
 });
});

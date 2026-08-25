/* =========================
   01 메뉴 화면 전환
========================= */

const navButtons =
  document.querySelectorAll('.nav-btn');

const pages =
  document.querySelectorAll('.page');


navButtons.forEach(function(button){

  button.addEventListener(
    'click',
    function(){

      const pageName =
        this.dataset.page;


      /* 모든 화면 숨김 */

      pages.forEach(
        function(page){

          page.classList.remove('active');

        }
      );


      /* 메뉴 Active 제거 */

      navButtons.forEach(
        function(btn){

          btn.classList.remove('active');

        }
      );


      /* 선택한 화면 표시 */

      document
        .getElementById(pageName)
        .classList.add('active');


      /* 선택 메뉴 활성화 */

      this.classList.add('active');


      /* 모바일 메뉴 닫기 */

      nav.classList.remove('open');

    }
  );

});



/* =========================
   02 모바일 햄버거
========================= */

const menuBtn =
  document.getElementById('menuBtn');

const nav =
  document.getElementById('nav');


menuBtn.addEventListener(
  'click',
  function(){

    nav.classList.toggle('open');

  }
);



/* =========================
   03 Modal
========================= */

const todoModal =
  document.getElementById('todoModal');

const goalModal =
  document.getElementById('goalModal');


const openTodoModal =
  document.getElementById('openTodoModal');

const openGoalModal =
  document.getElementById('openGoalModal');


openTodoModal.addEventListener(
  'click',
  function(){

    todoModal.classList.add('open');

  }
);


openGoalModal.addEventListener(
  'click',
  function(){

    goalModal.classList.add('open');

  }
);



/* Modal 닫기 */

const closeButtons =
  document.querySelectorAll('[data-close]');


closeButtons.forEach(
  function(button){

    button.addEventListener(
      'click',
      function(){

        const modalId =
          this.dataset.close;


        document
          .getElementById(modalId)
          .classList.remove('open');

      }
    );

  }
);



/* 배경 클릭으로 닫기 */

const modalBackgrounds =
  document.querySelectorAll('.modal-bg');


modalBackgrounds.forEach(
  function(background){

    background.addEventListener(
      'click',
      function(event){

        if(event.target === this){

          this.classList.remove('open');

        }

      }
    );

  }
);



/* =========================
   04 할 일 Error
========================= */

const todoTitle =
  document.getElementById('todoTitle');

const todoError =
  document.getElementById('todoError');

const addTodo =
  document.getElementById('addTodo');


addTodo.addEventListener(
  'click',
  function(){

    if(
      todoTitle.value.trim() === ''
    ){

      todoTitle.classList.add(
        'input-error'
      );

      todoError.classList.add(
        'show'
      );

      todoTitle.focus();

    }

    else {

      todoTitle.classList.remove(
        'input-error'
      );

      todoError.classList.remove(
        'show'
      );


      alert(
        '할 일이 등록되었습니다.'
      );


      todoModal.classList.remove(
        'open'
      );


      todoTitle.value = '';

    }

  }
);



/* 입력 시작하면 Error 제거 */

todoTitle.addEventListener(
  'input',
  function(){

    if(
      this.value.trim() !== ''
    ){

      this.classList.remove(
        'input-error'
      );

      todoError.classList.remove(
        'show'
      );

    }

  }
);



/* =========================
   05 목표 Error + Disabled
========================= */

const goalTitle =
  document.getElementById('goalTitle');

const startDate =
  document.getElementById('startDate');

const endDate =
  document.getElementById('endDate');

const goalError =
  document.getElementById('goalError');

const dateError =
  document.getElementById('dateError');

const addGoal =
  document.getElementById('addGoal');



/* 처음에는 비활성 */

addGoal.disabled = true;



function checkGoalForm(){

  const titleOk =
    goalTitle.value.trim() !== '';

  const startOk =
    startDate.value !== '';

  const endOk =
    endDate.value !== '';


  if(
    titleOk &&
    startOk &&
    endOk
  ){

    addGoal.disabled = false;

  }

  else {

    addGoal.disabled = true;

  }

}



goalTitle.addEventListener(
  'input',
  checkGoalForm
);


startDate.addEventListener(
  'change',
  checkGoalForm
);


endDate.addEventListener(
  'change',
  checkGoalForm
);



addGoal.addEventListener(
  'click',
  function(){


    let hasError = false;



    /* 목표명 */

    if(
      goalTitle.value.trim() === ''
    ){

      goalTitle.classList.add(
        'input-error'
      );

      goalError.classList.add(
        'show'
      );

      hasError = true;

    }

    else {

      goalTitle.classList.remove(
        'input-error'
      );

      goalError.classList.remove(
        'show'
      );

    }



    /* 날짜 */

    if(
      startDate.value === '' ||
      endDate.value === ''
    ){

      startDate.classList.add(
        'input-error'
      );

      endDate.classList.add(
        'input-error'
      );

      dateError.classList.add(
        'show'
      );

      hasError = true;

    }

    else {

      startDate.classList.remove(
        'input-error'
      );

      endDate.classList.remove(
        'input-error'
      );

      dateError.classList.remove(
        'show'
      );

    }



    if(hasError){

      return;

    }



    alert(
      '목표가 등록되었습니다.'
    );


    goalModal.classList.remove(
      'open'
    );



    /* 초기화 */

    goalTitle.value = '';

    startDate.value = '';

    endDate.value = '';

    checkGoalForm();

  }
);



/* =========================
   06 할 일 탭
========================= */

const tabs =
  document.querySelectorAll('.tab');

const todos =
  document.querySelectorAll('.todo-row');


tabs.forEach(
  function(tab){

    tab.addEventListener(
      'click',
      function(){

        const filter =
          this.dataset.tab;


        tabs.forEach(
          function(item){

            item.classList.remove(
              'active'
            );

          }
        );


        this.classList.add(
          'active'
        );



        todos.forEach(
          function(todo){


            if(
              filter === 'all'
            ){

              todo.style.display =
                'grid';

            }


            else if(
              todo.dataset.status
              === filter
            ){

              todo.style.display =
                'grid';

            }


            else {

              todo.style.display =
                'none';

            }

          }
        );

      }
    );

  }
);



/* =========================
   07 학습 기록
   입력 → 저장 → 수정/삭제
========================= */

const editableBlocks =
  document.querySelectorAll(
    '[data-editable]'
  );


editableBlocks.forEach(
  function(block){


    const textarea =
      block.querySelector(
        'textarea'
      );


    const saveButton =
      block.querySelector(
        '.save-record-btn'
      );


    const editButton =
      block.querySelector(
        '.edit-record-btn'
      );


    const deleteButton =
      block.querySelector(
        '.delete-record-btn'
      );



    /* -----------------
       저장
    ------------------ */

    saveButton.addEventListener(
      'click',
      function(){


        if(
          textarea.value.trim()
          === ''
        ){

          textarea.classList.add(
            'input-error'
          );

          alert(
            '내용을 입력해주세요.'
          );

          textarea.focus();

          return;

        }


        textarea.classList.remove(
          'input-error'
        );


        /* 입력 잠금 */

        textarea.disabled = true;


        /* 저장 숨기기 */

        saveButton.classList.add(
          'hidden'
        );


        /* 수정/삭제 표시 */

        editButton.classList.remove(
          'hidden'
        );

        deleteButton.classList.remove(
          'hidden'
        );

      }
    );



    /* -----------------
       수정
    ------------------ */

    editButton.addEventListener(
      'click',
      function(){


        /* 다시 입력 가능 */

        textarea.disabled = false;


        /* 저장 버튼 표시 */

        saveButton.classList.remove(
          'hidden'
        );


        /* 수정/삭제 숨기기 */

        editButton.classList.add(
          'hidden'
        );

        deleteButton.classList.add(
          'hidden'
        );


        textarea.focus();

      }
    );



    /* -----------------
       삭제
    ------------------ */

    deleteButton.addEventListener(
      'click',
      function(){


        const deleteOk =
          confirm(
            '작성한 내용을 삭제하시겠습니까?'
          );


        if(deleteOk){


          textarea.value = '';

          textarea.disabled = false;


          /* 다시 처음 상태 */

          saveButton.classList.remove(
            'hidden'
          );


          editButton.classList.add(
            'hidden'
          );


          deleteButton.classList.add(
            'hidden'
          );

        }

      }
    );


    /* 입력하면 빨간 테두리 제거 */

    textarea.addEventListener(
      'input',
      function(){

        if(
          this.value.trim()
          !== ''
        ){

          this.classList.remove(
            'input-error'
          );

        }

      }
    );


  }
);
// import { useEffect, useRef, useState } from 'react';
// import useInput from '../../hooks/useInput';
// import { useNavigate } from 'react-router-dom';

// const URL = import.meta.env.VITE_SERVER_URL;

// export const SignupInputForm = () => {
//   const id = useInput('');
//   const pw = useInput('');
//   const pwCheck = useInput('');
//   const [isIdRight, setIdRight] = useState(false);
//   const [isPwRight, setPwRight] = useState(false);
//   const [idCheck, setIdCheck] = useState(false);
//   const [checkedId, setCheckedId] = useState('');
//   const idRef = useRef<HTMLInputElement>(null);
//   const pwRef = useRef<HTMLInputElement>(null);
//   const pwCheckRef = useRef<HTMLInputElement>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const { value } = id;
//     if (idValid(value) && idCheck && checkedId === id.value) {
//       setIdRight(true);
//     } else setIdRight(false);
//   }, [id]);

//   useEffect(() => {
//     const { value } = pw;
//     if (pwValid(value)) setPwRight(true);
//   }, [pw]);

//   useEffect(() => {
//     const { value } = pwCheck;
//     if (!pwValid(value) || value === '' || value !== pw.value)
//       setPwRight(false);
//     else setPwRight(true);
//   });

//   const idValid = (str: string) => {
//     return /\w{6,20}/g.test(str);
//   };

//   const pwValid = (str: string) => {
//     // eslint-disable-next-line no-useless-escape
//     return /[\w\[\]\/?.,;:|*~`!^\-_+<>@$%&\\]{8,}/g.test(str);
//   };

//   const handleKeyPress = (
//     e: React.KeyboardEvent<HTMLElement>,
//     ref: React.RefObject<HTMLInputElement>,
//   ) => {
//     if (e.key === 'Enter' && ref.current) {
//       e.preventDefault();
//       ref.current.focus();
//     }
//   };

//   const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
//     id.onReset();
//     pw.onReset();
//     pwCheck.onReset();
//     setIdRight(false);
//     setPwRight(false);
//     setIdCheck(false);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!isIdRight || !idCheck) {
//       alert('아이디를 확인해 주세요');
//     } else if (!isPwRight) {
//       alert('비밀번호를 다시 입력해 주세요');
//     } else {
//       fetch(`${URL}/users`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           loginId: id.value,
//           password: pw.value,
//         }),
//       })
//         .then((res) => res.json())
//         .then((response) => {
//           if (response.statusCode === 400) throw new Error();
//           alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
//           navigate('/signin');
//         })
//         .catch(() => {
//           alert('회원가입에 실패하였습니다');
//           navigate('');
//         });
//     }
//   };

//   const handleIdCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!idValid(id.value)) alert('올바른 아이디를 입력해 주세요');
//     else {
//       fetch(`${URL}/users?loginId=${id.value}`)
//         .then((res) => res.json())
//         .then((res) => {
//           if (res.foundStatus === 1000) {
//             throw new Error();
//           } else if (res.foundStatus === 1001) {
//             alert('아이디를 사용하실 수 있습니다');
//             setIdCheck(true);
//             setCheckedId(id.value);
//             if (pwRef.current) pwRef.current.focus();
//           }
//         })
//         .catch(() => {
//           alert('아이디를 사용하실 수 없습니다');
//           setIdCheck(false);
//           setIdRight(false);
//         });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-4xl px-8 py-10 bg-white shadow-lg rounded-xl">
//       <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6 text-xl font-bold">
//         <div className="flex flex-col">
//           <label htmlFor="id" className="text-black">아이디</label>
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="6자 이상"
//               {...id}
//               ref={idRef}
//               onKeyPress={(e) => handleKeyPress(e, pwRef)}
//               className="mt-1 p-2 border rounded text-black flex-grow"
//             />
//             <button
//               type="button"
//               className="ml-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-400 transition duration-300 text-xl"
//               onClick={handleIdCheck}
//             >
//               중복 확인
//             </button>
//           </div>
//           {id.value && !isIdRight && (
//             <div className="mt-2">
//               <span className="text-red-500">사용 불가능한 아이디입니다</span>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="password" className="text-black">비밀번호</label>
//           <input
//             type="password"
//             placeholder="특수문자 포함 8자 이상"
//             {...pw}
//             ref={pwRef}
//             onKeyPress={(e) => handleKeyPress(e, pwCheckRef)}
//             className="mt-1 p-2 border rounded text-black"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="confirmPassword" className="text-black">비밀번호 확인</label>
//           <input
//             type="password"
//             placeholder="비밀번호를 다시 입력해 주세요"
//             {...pwCheck}
//             ref={pwCheckRef}
//             className="mt-1 p-2 border rounded text-black"
//           />
//           {pwCheck.value && !isPwRight && (
//             <div className="mt-2">
//               <span className="text-red-500">비밀번호가 일치하지 않습니다</span>
//             </div>
//           )}
//         </div>
//         <div className="flex justify-between mt-4">
//           <button
//             type="reset"
//             className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300 text-xl"
//             onClick={handleClear}
//           >
//             초기화
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300 text-xl"
//           >
//             회원가입
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

import { useEffect, useRef, useState } from 'react';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_SERVER_URL;

export const SignupInputForm = () => {
  const id = useInput('');
  const pw = useInput('');
  const pwCheck = useInput('');
  const [isIdRight, setIdRight] = useState(false);
  const [isPwRight, setPwRight] = useState(false);
  const [idCheck, setIdCheck] = useState(false);
  const [checkedId, setCheckedId] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pwCheckRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { value } = id;
    if (idValid(value) && idCheck && checkedId === id.value) {
      setIdRight(true);
    } else setIdRight(false);
  }, [id]);

  useEffect(() => {
    const { value } = pw;
    if (pwValid(value)) setPwRight(true);
  }, [pw]);

  useEffect(() => {
    const { value } = pwCheck;
    if (!pwValid(value) || value === '' || value !== pw.value) setPwRight(false);
    else setPwRight(true);
  });

  const idValid = (str: string) => {
    return /\w{6,20}/g.test(str);
  };

  const pwValid = (str: string) => {
    // eslint-disable-next-line no-useless-escape
    return /[\w\[\]\/?.,;:|*~`!^\-_+<>@$%&\\]{8,}/g.test(str);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>, ref: React.RefObject<HTMLInputElement>) => {
    if (e.key === 'Enter' && ref.current) {
      e.preventDefault();
      ref.current.focus();
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    id.onReset();
    pw.onReset();
    pwCheck.onReset();
    setIdRight(false);
    setPwRight(false);
    setIdCheck(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isIdRight || !idCheck) {
      alert('아이디를 확인해 주세요');
    } else if (!isPwRight) {
      alert('비밀번호를 다시 입력해 주세요');
    } else {
      fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: id.value,
          password: pw.value,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode === 400) throw new Error();
          alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
          window.location.reload(); // 회원가입 완료 후 페이지 새로고침
        })
        .catch(() => {
          alert('회원가입에 실패하였습니다');
          navigate('');
        });
    }
  };

  const handleIdCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!idValid(id.value)) alert('올바른 아이디를 입력해 주세요');
    else {
      fetch(`${URL}/users?loginId=${id.value}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.foundStatus === 1000) {
            throw new Error();
          } else if (res.foundStatus === 1001) {
            alert('아이디를 사용하실 수 있습니다');
            setIdCheck(true);
            setCheckedId(id.value);
            if (pwRef.current) pwRef.current.focus();
          }
        })
        .catch(() => {
          alert('아이디를 사용하실 수 없습니다');
          setIdCheck(false);
          setIdRight(false);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md px-4 pt-0 bg-[#303841] rounded-xl">
      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4 text-xl font-bold">
        <div className="flex flex-col">
          <label htmlFor="id" className="text-white">아이디</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="6자 이상"
              {...id}
              ref={idRef}
              onKeyPress={(e) => handleKeyPress(e, pwRef)}
              className="mt-1 p-2 border rounded text-black flex-grow"
            />
            <button
              type="button"
              className="relative ml-2 px-5 py-3 bg-black text-white text-sm rounded-lg border-2 border-white transition duration-300"
              onClick={handleIdCheck}
              style={{
                borderColor: '#ffffff', // 흰색 테두리
                backgroundColor: 'transparent', // 배경 투명화
                transition: 'box-shadow 0.3s ease-in-out',
                boxShadow: '0 0 2px #ffffff', // 기본 그림자 효과
              }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 10px #ffffff')}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 0 2px #ffffff')}
            >
              중복 확인
              <span className="absolute inset-0 rounded-lg border border-transparent transition-all duration-300 hover:border-white hover:shadow-outline" style={{ boxShadow: '0 0 10px #ffffff' }}></span>
            </button>
          </div>
          {id.value && !isIdRight && (
            <div className="mt-2">
              <span className="text-red-500">사용 불가능한 아이디입니다</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">비밀번호</label>
          <input
            type="password"
            placeholder="특수문자 포함 8자 이상"
            {...pw}
            ref={pwRef}
            onKeyPress={(e) => handleKeyPress(e, pwCheckRef)}
            className="mt-1 p-2 border rounded text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-white">비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            {...pwCheck}
            ref={pwCheckRef}
            className="mt-1 p-2 border rounded text-black"
          />
          {pwCheck.value && !isPwRight && (
            <div className="mt-2">
              <span className="text-red-500">비밀번호가 일치하지 않습니다</span>
            </div>
          )}
        </div>
        <div className="flex justify-between mt-4 space-x-4">
          <button
            type="reset"
            className="relative bg-black text-white py-3 px-6 rounded-lg border-2 border-white transition duration-300"
            onClick={handleClear}
            style={{
              borderColor: '#ffffff', // 흰색 테두리
              backgroundColor: 'transparent', // 배경 투명화
              transition: 'box-shadow 0.3s ease-in-out',
              boxShadow: '0 0 2px #ffffff', // 기본 그림자 효과
            }}
          >
            초기화
            <span className="absolute inset-0 rounded-lg border border-transparent transition-all duration-300 hover:border-white hover:shadow-outline" style={{ boxShadow: '0 0 10px #ffffff' }}></span>
          </button>
          <button
            type="submit"
            className="relative bg-black text-white py-3 px-6 rounded-lg border-2 border-white transition duration-300"
            style={{
              borderColor: '#ffffff', // 흰색 테두리
              backgroundColor: 'transparent', // 배경 투명화
              transition: 'box-shadow 0.3s ease-in-out',
              boxShadow: '0 0 2px #ffffff', // 기본 그림자 효과
            }}
          >
            회원가입
            <span className="absolute inset-0 rounded-lg border border-transparent transition-all duration-300 hover:border-white hover:shadow-outline" style={{ boxShadow: '0 0 10px #ffffff' }}></span>
          </button>
        </div>
      </form>
    </div>
  );  
};
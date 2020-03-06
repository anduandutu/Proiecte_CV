%Sentiment analysis
function [] = sentiment_analysis()
%% Partea 1 - filtrarea cuvintelor care nu sunt cuvinte:)))
filename = 'subs.txt';
tbl = readtable(filename,'FileType','text');
textData = tbl(1:height(tbl),1);
textData(1:height(tbl),1) 
%De gasit cum se analizeaza cuvintele gen
%% Partea 2 - analiza per total pe textul obtinut in subs
%algoritm de sentiment analysis
%% Partea 3 - introducerea unui text cu emotia respectiva in frame-ul corespunzator 
%asocierea cu emotia corecta
%% Partea 4 - formarea unui video din frame-urile obtinute
%Asocierea cu imaginea
end
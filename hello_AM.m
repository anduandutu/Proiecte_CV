%AM-Proiect_first_try
a=VideoReader('test.mp4');
i = 1;
M = 1200
N = 1250
text = cell(1,N-M);
index = cell(1,N-M);
for img = 1200:1250;
    filename=strcat('frame',num2str(img),'.jpg');
    b = read(a, img);
    imwrite(b,filename);
    %Impartim videoclipul in frame-uri
    businessCard   = imread(filename);
    ocrResults     = ocr(businessCard)
    recognizedText = strcat(ocrResults.Text);
    %Recunoastem textul din imaginile obtinute
    %si il scriem intr-un fisier .txt pe care ulterior
    %vom face sentiment analysis 
    fileID = fopen('subs.txt','a');
    fprintf(fileID,strcat(recognizedText,'\n'));
    index{i} = i;
    text{i} = ocrResults.Text;
    i = i + 1;
    %figure;
    %imshow(businessCard);
    %ext(600, 150, recognizedText, 'BackgroundColor', [1 1 1]);
end
%Apel sentiment_analysis
sentiment_analysis();
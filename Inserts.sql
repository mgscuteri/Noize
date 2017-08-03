use NoizeMain
CREATE Procedure dbo.savePerformance
@NoiseUserId int,
@PerformanceId int
AS   
insert into dbo.NoiseUserXPerformanceSave(NoiseUserId, PerformanceId)
Values (@NoiseUserId, @PerformanceId)
GO

--Expose these procedures
--Insert Band
exec dbo.AddBand 'iWareHouse'
select * from dbo.Band
--Insert Venue
exec dbo.AddVenue 'The Electric Factory', '421 N 7th St', '', 'Philadelphia', 'PA', '19123', 'http://www.electricfactory.info/'
select * from dbo.venue
--Insert Performance
Exec dbo.AddPerformance 'TestPerformance', 1, 'TestPerformance at venue 1', 'www.buytickets.com', '08/27/2017', null, 0, null
select * from dbo.Performance
--Insert Bands for Performance
exec dbo.AddBandToPerformance 3, 4
select * from dbo.PerformanceXBand
--Insert user
exec dbo.AddNoiseUser 'testPass', 'testUser2', null,null,'Philadelphia', 'PA', '19128'
select * from dbo.NoiseUser
--Like Band
exec dbo.LikeBand 1, 1
select * from dbo.NoiseUserXBandLike
--Save Performance
exec dbo.savePerformance 2, 3
select * from dbo.NoiseUserXPerformanceSave

